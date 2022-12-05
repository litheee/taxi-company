import { FormProvider, useForm } from 'react-hook-form'

import { AvatarUpload, SearchField, Section } from 'components/common'
import { Select, TextField, Button, Textarea, InputMask } from 'ui'
import { DateField, PhoneField } from 'ui/maskedFields'

import * as S from './DataForm.styled'

import ProfileIcon from 'public/icons/profile.svg'
import PlusIcon from 'public/icons/plus.svg'
import DownloadIcon from 'public/icons/download.svg'

export const CounterpartyDataForm = () => {
	const useFormProps = useForm()

	const options = [
		{ label: 'Выбрать 1', value: 'Выбрать 1' },
		{ label: 'Выбрать 2', value: 'Выбрать 2' },
		{ label: 'Выбрать 3', value: 'Выбрать 3' }
	]

	return (
		<FormProvider {...useFormProps}>
			<S.CounterpartyDataForm>
				<S.FirstColumn>
					<AvatarUpload icon={<ProfileIcon />} />

					<TextField name="firstName" placeholder="Имя" />
					<TextField name="lastName" placeholder="Фамилия" />
					<TextField name="middleName" placeholder="Отчество" />

					<Section label="Контактные данные">
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
					</Section>

					<Section label="Дополнительные контакты">
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
					</Section>
				</S.FirstColumn>

				<S.Divider />

				<S.SecondColumn>
					<Section label="Комментарии">
						<Textarea name="comment" placeholder="Написать комментарий" />
					</Section>

					<Section
						label="Водительское удостоверение"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
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
					</Section>

					<Section
						label="Паспортные данные"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
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
					</Section>
				</S.SecondColumn>

				<S.Divider />

				<S.FormColumn>
					<Textarea
						name="passport.registerAddress"
						label="Адрес прописки"
						placeholder="Укажите Ваш текущий адрес проживания"
					/>

					<Textarea
						name="passport.currentAddress"
						placeholder="Укажите Ваш текущий адрес проживания"
					/>

					<Section
						label="Кисиарт ID"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<TextField
							name="kisiart.currentAddress"
							placeholder="Укажите Ваш текущий адрес проживания"
						/>
					</Section>

					<Section label="Привязка профилей">
						<SearchField name="profile" placeholder="Введите имя" />

						<Button color="green" startIcon={<PlusIcon />}>
							Добавить еще
						</Button>
					</Section>

					<Section
						label="Документы"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					></Section>
				</S.FormColumn>
			</S.CounterpartyDataForm>
		</FormProvider>
	)
}
