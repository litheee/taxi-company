import { FormProvider, useForm } from 'react-hook-form'
import { FocusEvent, useEffect, useRef } from 'react'

import { AvatarUpload, Heading, SearchField } from 'components/common'
import { Select, TextField, Button, Textarea, InputMask } from 'ui'
import { DateField, PhoneField } from 'ui/maskedFields'

import { useCounterparties } from 'contexts'

import * as S from './DataForm.styled'

import ProfileIcon from 'public/icons/profile.svg'
import PlusIcon from 'public/icons/plus.svg'
import DownloadIcon from 'public/icons/download.svg'

interface DrivingLicense {}

interface Passport {}

interface FormFields {
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

	const formRef = useRef<HTMLFormElement>(null)
	const { counterparty, focusedFields, update, focus, blur } = useCounterparties()

	const {
		reset,
		getValues,
		formState: { dirtyFields }
	} = useFormProps

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
			update(getValues())
		}
	}, [getValues, isFieldsChanged])

	useEffect(() => {
		if (!formRef.current) return

		const allInputs = formRef.current.querySelectorAll('input, textarea') as NodeListOf<
			HTMLInputElement | HTMLTextAreaElement
		>

		allInputs.forEach((input) => {
			if (focusedFields.includes(input.name)) {
				input.readOnly = true
			} else {
				input.readOnly = false
			}
		})
	}, [formRef, focusedFields])

	const options = [
		{ label: 'Выбрать 1', value: 'choose1' },
		{ label: 'Выбрать 2', value: 'choose2' },
		{ label: 'Выбрать 3', value: 'choose3' }
	]

	const onFormFocus = ({ target }: FocusEvent<HTMLFormElement, Element>) => {
		const { tagName, name } = target

		if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
			focus(name)
		}

		if (!focusedFields.includes(name)) {
			target.readOnly = false
		}
	}

	const onFormBlur = ({ target }: FocusEvent<HTMLFormElement, Element>) => {
		const { tagName, name } = target

		if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
			blur(name)
		}
	}

	return (
		<FormProvider {...useFormProps}>
			<S.CounterpartyDataForm ref={formRef} onFocus={onFormFocus} onBlur={onFormBlur}>
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
