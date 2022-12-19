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
	firstName: NullableString
	middleName: NullableString
	lastName: NullableString
	phone: NullableString
	email: NullableString
	comment: NullableString
	// drivingLicense: DrivingLicense
	// passport: Passport
	kisiartCurrentAddress: NullableString

	series: NullableString
	number: NullableString
	issuedBy: NullableString
	issueDate: NullableString
	registerAddress: NullableString
	currentAddress: NullableString
	subdivisionCode: NullableString

	expireDate: NullableString
	drivingLicenseNumber: NullableString
	issueCountry: NullableString

	choice: string
	contactFullName: string
	contactPhone: string
	profile: string
}
