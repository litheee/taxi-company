import { FormProvider, useForm } from 'react-hook-form'
import { useEffect } from 'react'

import { AvatarUpload, Heading, SearchField } from 'components/common'
import { Select, TextField, Button, Textarea, InputMask } from 'ui'
import { DateField, PhoneField } from 'ui/maskedFields'

import { useCounterparties } from 'hooks'

import * as S from './DataForm.styled'

import ProfileIcon from 'public/icons/profile.svg'
import PlusIcon from 'public/icons/plus.svg'
import DownloadIcon from 'public/icons/download.svg'

type NullableString = string | null

interface DrivingLicense {}

interface Passport {}

interface FormFields {
	firstName: NullableString
	middleName: NullableString
	lastName: NullableString
	phone: NullableString
	email: NullableString
	comment: NullableString
	drivingLicense: DrivingLicense
	passport: Passport
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

export const CounterpartyDataForm = () => {
	const useFormProps = useForm<FormFields>({
		defaultValues: {
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
	})

	const {
		reset,
		watch,
		getValues,
		formState: { dirtyFields }
	} = useFormProps

	const { counterparty, update } = useCounterparties()

	const values = watch()
	const isFieldsChanged = Object.keys(dirtyFields).length

	// set counterparty fields
	useEffect(() => {
		reset({
			...getValues(),
			...counterparty
		})
	}, [counterparty, reset, getValues])

	// update counterparty on focus leave
	useEffect(() => {
		if (isFieldsChanged) {
			console.log('up')
			update(getValues())
		}
	}, [getValues, isFieldsChanged])

	const options = [
		{ label: 'Выбрать 1', value: 'choose1' },
		{ label: 'Выбрать 2', value: 'choose2' },
		{ label: 'Выбрать 3', value: 'choose3' }
	]

	return (
		<FormProvider {...useFormProps}>
			<S.CounterpartyDataForm>
				<S.FirstColumn>
					<AvatarUpload icon={<ProfileIcon />} />

					<div>
						<TextField name="firstName" placeholder="Имя" />
						<TextField name="lastName" placeholder="Фамилия" />
						<TextField name="middleName" placeholder="Отчество" />
					</div>

					<div>
						<Heading variant="body1">Контактные данные</Heading>

						<PhoneField
							name="phone"
							maskType={2}
							type="tel"
							label="Телефон"
							placeholder="Укажите телефон"
						/>

						<TextField
							name="email"
							type="email"
							label="E-mail"
							placeholder="Укажите электронный адрес"
						/>
					</div>

					<S.AdditionalContacts>
						<Heading variant="body1">Дополнительные контакты</Heading>

						<TextField
							name="contactFullName"
							placeholder="Укажите ФИО родственника/друга/жены"
						/>

						<span>
							<Select name="choice" placeholder="Выбрать" options={options} />
							<PhoneField name="contactPhone" maskType={2} />
						</span>

						<Button color="green" startIcon={<PlusIcon />}>
							Добавить еще
						</Button>
					</S.AdditionalContacts>
				</S.FirstColumn>

				<S.Divider $orientation="vertical" />

				<S.SecondColumn>
					<div>
						<Heading variant="body1">Комментарии</Heading>

						<Textarea name="comment" placeholder="Написать комментарий" />
					</div>

					<div>
						<Heading
							variant="body1"
							endAdornment={
								<button type="button">
									<DownloadIcon />
								</button>
							}
						>
							Водительское удостоверение
						</Heading>

						<InputMask
							name="drivingLicenseNumber"
							label="Серия и номер"
							maskProps={{ mask: '9 9 9 9ㅤ9 9 9 9 9 9' }}
						/>

						<Select
							name="issueCountry"
							label="Где выдано"
							placeholder="Выберите страну"
							options={options}
						/>

						<DateField name="expireDate" label="Действителен до" />
					</div>

					<div>
						<Heading
							variant="body1"
							endAdornment={
								<button type="button">
									<DownloadIcon />
								</button>
							}
						>
							Паспортные данные
						</Heading>

						<S.FieldsRow>
							<InputMask
								name="series"
								label="Серия"
								placeholder="Укажите серию"
								maskProps={{
									alwaysShowMask: false,
									mask: '99 99'
								}}
							/>

							<InputMask
								name="number"
								label="Номер"
								placeholder="Укажите номер"
								maskProps={{
									alwaysShowMask: false,
									mask: '999 999'
								}}
							/>
						</S.FieldsRow>

						<TextField name="issuedBy" label="Кем выдан" placeholder="Укажите данные" />

						<S.FieldsRow>
							<DateField name="issueDate" label="Дата выдачи" />
							<TextField
								name="subdivisionCode"
								label="Код подразделения"
								placeholder="Укажите код"
							/>
						</S.FieldsRow>
					</div>
				</S.SecondColumn>

				<S.Divider $orientation="vertical" />

				<S.FormColumn>
					<div>
						<Textarea
							name="registerAddress"
							label="Адрес прописки"
							placeholder="Укажите Ваш текущий адрес проживания"
						/>
					</div>

					<div>
						<Textarea
							name="currentAddress"
							label="Фактический адрес проживания"
							placeholder="Укажите Ваш текущий адрес проживания"
						/>
					</div>

					<div>
						<Heading
							variant="body1"
							endAdornment={
								<button type="button">
									<DownloadIcon />
								</button>
							}
						>
							Кисиарт ID
						</Heading>

						<TextField
							name="kisiartCurrentAddress"
							placeholder="Укажите Ваш текущий адрес проживания"
						/>
					</div>

					<div>
						<Heading variant="body1">Привязка профилей</Heading>

						<SearchField name="profile" placeholder="Введите имя" />

						<Button color="green" startIcon={<PlusIcon />}>
							Добавить еще
						</Button>
					</div>

					<div>
						<Heading
							variant="body1"
							endAdornment={
								<button type="button">
									<DownloadIcon />
								</button>
							}
						>
							Документы
						</Heading>
					</div>
				</S.FormColumn>
			</S.CounterpartyDataForm>
		</FormProvider>
	)
}
