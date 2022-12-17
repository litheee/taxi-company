import { FormProvider, useForm } from 'react-hook-form'

import { AvatarUpload, Heading, SearchField } from 'components/common'
import { Select, TextField, Button, Textarea, InputMask } from 'ui'
import { DateField, PhoneField } from 'ui/maskedFields'

import { useCounterparties } from 'hooks'

import * as S from './DataForm.styled'

import ProfileIcon from 'public/icons/profile.svg'
import PlusIcon from 'public/icons/plus.svg'
import DownloadIcon from 'public/icons/download.svg'
import { useEffect } from 'react'

export const CounterpartyDataForm = () => {
	const useFormProps = useForm()

	const counterparties = useCounterparties()

	// useEffect(() => {

	// }, [])

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
							name="driverLicense.seriesNumber"
							label="Серия и номер"
							maskProps={{ mask: '9 9 9 9ㅤ9 9 9 9 9 9' }}
						/>

						<Select
							name="driverLicense.issued"
							label="Где выдано"
							placeholder="Выберите страну"
							options={options}
						/>

						<DateField name="driverLicense.dateEnd" label="Действителен до" />
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
								name="passport.series"
								label="Серия"
								placeholder="Укажите серию"
								maskProps={{
									alwaysShowMask: false,
									mask: '99 99'
								}}
							/>

							<InputMask
								name="passport.number"
								label="Номер"
								placeholder="Укажите номер"
								maskProps={{
									alwaysShowMask: false,
									mask: '999 999'
								}}
							/>
						</S.FieldsRow>

						<TextField
							name="passport.issuedBy"
							label="Кем выдан"
							placeholder="Укажите данные"
						/>

						<S.FieldsRow>
							<DateField name="passport.dateIssue" label="Дата выдачи" />
							<TextField
								name="passport.subdivisionCode"
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
							name="passport.registerAddress"
							label="Адрес прописки"
							placeholder="Укажите Ваш текущий адрес проживания"
						/>
					</div>

					<div>
						<Textarea
							name="passport.currentAddress"
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
							name="kisiart.currentAddress"
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
