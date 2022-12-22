import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
// import merge from 'lodash.merge'
// import assign from 'lodash.assign'

import { useWS } from 'hooks'
import { getObjectsDiffDeep } from 'utils'
import {
	CounterpartiesContextProps,
	Counterparty,
	CounterpartyRaw
} from './Counterparties.types'

//@ts-ignore
// const changeNullToEmptyString = (obj: object) => {
// 	const objEntries = Object.entries(obj)

// 	return Object.fromEntries(
// 		//@ts-ignore
// 		objEntries.reduce((prev, [key, value]) => {
// 			if (value === null) {
// 				return [...prev, [key, '']]
// 			}

// 			if (typeof value === 'object') {
// 				return [...prev, [key, changeNullToEmptyString(value)]]
// 			}

// 			return [...prev, [key, value]]
// 		}, [])
// 	)
// }

const transformCounterpartyRaw = (counterparty: CounterpartyRaw): Counterparty => {
	const {
		fname: firstName,
		mname: middleName,
		lname: lastName,
		phone,
		email,
		comment,
		license_date,
		license_num,
		pass_ser,
		pass_num,
		pass_give,
		pass_date,
		address,
		address_fact,
		kisart
	} = counterparty

	return {
		firstName,
		middleName,
		lastName,
		phone,
		email,
		comment,
		expireDate: license_date,
		drivingLicenseNumber: license_num,
		issueCountry: '',
		series: pass_ser,
		number: pass_num,
		issuedBy: pass_give,
		issueDate: pass_date,
		registerAddress: address,
		currentAddress: address_fact,
		subdivisionCode: '',
		kisiartCurrentAddress: kisart,
		choice: '',
		contactFullName: '',
		contactPhone: '',
		profile: ''
	}
}

const transformCounterparty = (counterparty: Counterparty): Partial<CounterpartyRaw> => {
	const {
		firstName,
		middleName,
		lastName,
		phone,
		email,
		comment,
		expireDate: license_date,
		drivingLicenseNumber: license_num,
		series: pass_ser,
		number: pass_num,
		issuedBy: pass_give,
		issueDate: pass_date,
		registerAddress: address,
		currentAddress: address_fact,
		kisiartCurrentAddress: kisart
	} = counterparty

	return {
		fname: firstName,
		mname: middleName,
		lname: lastName,
		phone,
		email,
		comment,
		license_date,
		license_num,
		pass_ser,
		pass_num,
		pass_give,
		pass_date,
		address,
		address_fact,
		kisart
	}
}

export const CounterpartiesContext = createContext({} as CounterpartiesContextProps)

export const CounterpartiesProvider = ({ children }: { children: ReactNode }) => {
	const defaultValues: Counterparty = {
		firstName: '',
		middleName: '',
		lastName: '',
		phone: '',
		email: '',
		comment: '',
		expireDate: '',
		drivingLicenseNumber: '',
		issueCountry: '',
		series: '',
		number: '',
		issuedBy: '',
		issueDate: '',
		registerAddress: '',
		currentAddress: '',
		subdivisionCode: '',
		kisiartCurrentAddress: '',
		choice: '',
		contactFullName: '',
		contactPhone: '',
		profile: ''
	}

	const [counterparty, setCounterparty] = useState<Counterparty>(defaultValues)
	const [subscribed, setSubscribed] = useState(false)
	const [isCounterpartyLoading, setCounterpartyLoading] = useState(true)
	const ws = useWS()

	const onMessage = useCallback((event: MessageEvent<any>) => {
		const { data, block } = JSON.parse(event.data)

		if (block === 'contragent') {
			const withoutUndefined = Object.fromEntries(
				Object.entries(transformCounterpartyRaw(data)).filter(([key, value]) =>
					Boolean(value)
				)
			)

			//@ts-ignore
			setCounterparty((counterparty) => ({
				...counterparty,
				...withoutUndefined
			}))
			setCounterpartyLoading(false)
		}
	}, [])

	useEffect(() => {
		if (ws.isReady && ws.instance && !subscribed) {
			ws.send({ command: 'subscribe', block: 'contragent', id: 4549 })
			ws.instance.addEventListener('message', onMessage)
			setSubscribed(true)
		}

		return () => {
			if (subscribed) {
				ws.send({ command: 'unsubscribe', block: 'contragent', id: 4549 })
				ws.instance?.removeEventListener('message', onMessage)
			}
		}
	}, [ws, onMessage, subscribed])

	const update = (newData: Counterparty) => {
		ws.send({
			command: 'update',
			block: 'contragent',
			id: 4549,
			//@ts-ignore
			data: transformCounterparty(getObjectsDiffDeep(counterparty, newData))
		})

		setCounterparty(newData)
	}

	const value: CounterpartiesContextProps = {
		counterparty,
		isCounterpartyLoading,
		update
	}

	return (
		<CounterpartiesContext.Provider value={value}>
			{children}
		</CounterpartiesContext.Provider>
	)
}
