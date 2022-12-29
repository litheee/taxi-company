export type NullableString = string | null

export interface CounterpartyRaw {
	fname: NullableString
	mname: NullableString
	lname: NullableString
	phone: NullableString
	email: NullableString
	comment: NullableString
	license_date: NullableString
	license_num: NullableString
	pass_ser: NullableString
	pass_num: NullableString
	pass_give: NullableString
	pass_date: NullableString
	address: NullableString
	address_fact: NullableString
	kisart: NullableString
}

export interface DrivingLicense {}

export interface Passport {}

export interface Counterparty {
	firstName: string
	middleName: string
	lastName: string
	phone: string
	email: string
	comment: string
	// drivingLicense: DrivingLicense
	// passport: Passport
	kisiartCurrentAddress: string

	series: string
	number: string
	issuedBy: string
	issueDate: string
	registerAddress: string
	currentAddress: string
	subdivisionCode: string

	expireDate: string
	drivingLicenseNumber: string
	issueCountry: string

	choice: string
	contactFullName: string
	contactPhone: string
	profile: string
}

export interface CounterpartiesContextProps {
	counterparty?: Counterparty
	isCounterpartyLoading: boolean
	focusedFields: string[]
	update: (data: Counterparty) => void
	focus: (fieldName: string) => void
	blur: (fieldName: string) => void
}
