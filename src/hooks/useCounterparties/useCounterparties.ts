import { useCallback, useState } from 'react'
import merge from 'lodash.merge'
import assign from 'lodash.assign'

import { useWS } from '../useWS'
import { CounterpartyRaw, Counterparty } from './useCounterparties.types'
import { getObjectsDiffDeep } from 'utils'

//@ts-ignore
const changeNullToEmptyString = (obj: object) => {
	const objEntries = Object.entries(obj)

	return Object.fromEntries(
		//@ts-ignore
		objEntries.reduce((prev, [key, value]) => {
			if (value === null) {
				return [...prev, [key, '']]
			}

			if (typeof value === 'object') {
				return [...prev, [key, changeNullToEmptyString(value)]]
			}

			return [...prev, [key, value]]
		}, [])
	)
}

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

export const useCounterparties = () => {
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

	const [counterparty, setCounterparty] = useState<Counterparty>()
	const { ws, send } = useWS()

	ws.onmessage = (event) => {
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
		}
	}

	const subscribe = useCallback(() => {
		send({ command: 'subscribe', block: 'contragent', id: 4549 })
	}, [send])

	const unsubscribe = useCallback(() => {
		send({ command: 'unsubscribe', block: 'contragent', id: 4549 })
	}, [send])

	const update = (newData: Counterparty) => {
		console.log('update')
		send({
			command: 'update',
			block: 'contragent',
			id: 4549,
			//@ts-ignore
			data: transformCounterparty(getObjectsDiffDeep(counterparty, newData))
		})

		//@ts-ignore
		setCounterparty(newData)
	}

	return {
		counterparty,
		subscribe,
		unsubscribe,
		update
	}
}
