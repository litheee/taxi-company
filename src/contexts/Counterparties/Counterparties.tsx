import { createContext, ReactNode, useContext } from 'react'

import { useWS } from 'hooks'

import {
	CounterpartiesContextProps,
	Counterparty,
	CounterpartyRaw
} from './Counterparties.types'

export const CounterpartiesContext = createContext({} as CounterpartiesContextProps)

export const useCounterparties = () => {
	return useContext(CounterpartiesContext)
}

export const CounterpartiesProvider = ({
	children
}: {
	children: ReactNode
}): JSX.Element => {
	// const defaultValues: Counterparty = {
	// 	firstName: '',
	// 	middleName: '',
	// 	lastName: '',
	// 	phone: '',
	// 	email: '',
	// 	comment: '',
	// 	expireDate: '',
	// 	drivingLicenseNumber: '',
	// 	issueCountry: '',
	// 	series: '',
	// 	number: '',
	// 	issuedBy: '',
	// 	issueDate: '',
	// 	registerAddress: '',
	// 	currentAddress: '',
	// 	subdivisionCode: '',
	// 	kisiartCurrentAddress: '',
	// 	choice: '',
	// 	contactFullName: '',
	// 	contactPhone: '',
	// 	profile: ''
	// }
	const transformCounterpartyRaw = (counterparty: CounterpartyRaw): Counterparty => {
		const {
			fname: firstName = '',
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
			firstName: firstName || '',
			middleName: middleName || '',
			lastName: lastName || '',
			phone: phone || '',
			email: email || '',
			comment: comment || '',
			expireDate: license_date || '',
			drivingLicenseNumber: license_num || '',
			issueCountry: '',
			series: pass_ser || '',
			number: pass_num || '',
			issuedBy: pass_give || '',
			issueDate: pass_date || '',
			registerAddress: address || '',
			currentAddress: address_fact || '',
			subdivisionCode: '',
			kisiartCurrentAddress: kisart || '',
			choice: '',
			contactFullName: '',
			contactPhone: '',
			profile: ''
		}
	}

	const transformCounterparty = (
		counterparty: Counterparty
	): Partial<CounterpartyRaw> => {
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

	const { data, isLoading, focusedFields, update, focus, blur } = useWS({
		block: 'contragent',
		id: 4549,
		transform: transformCounterparty,
		transformRaw: transformCounterpartyRaw
	})

	const value = {
		counterparty: data,
		isCounterpartyLoading: isLoading,
		focusedFields,
		update,
		focus,
		blur
	}

	return (
		<CounterpartiesContext.Provider value={value}>
			{children}
		</CounterpartiesContext.Provider>
	)
}
