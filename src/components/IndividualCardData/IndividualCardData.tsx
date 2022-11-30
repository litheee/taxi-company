import { AvatarUpload, Section } from 'components/common'
import { Select, TextField, Button, Textarea, InputMask } from 'ui'

import * as S from './IndividualCardData.styled'

import ProfileIcon from 'public/icons/profile.svg'
import PlusIcon from 'public/icons/plus.svg'
import LoupeIcon from 'public/icons/loupe.svg'
import DownloadIcon from 'public/icons/download.svg'
import { DateField, PhoneField } from 'ui/maskedFields'

export const IndividualCardData = () => {
	const options = [
		{ label: 'Выбрать 1', value: 'Выбрать 1' },
		{ label: 'Выбрать 2', value: 'Выбрать 2' },
		{ label: 'Выбрать 3', value: 'Выбрать 3' }
	]

	return (
		<S.IndividualCardData>
			<form>
				<S.FormColumn>
					<AvatarUpload icon={<ProfileIcon />} />

					<TextField placeholder="Укажите ваше ФИО" />

					<Section label="Водительское удостоверение">
						<PhoneField maskType={2} label="Телефон" placeholder="Укажите телефон" />
						<TextField label="E-mail" placeholder="Укажите электронный адрес" />

						<S.AdditionalContacts>
							<TextField
								name="contactFullName"
								label="Дополнительные контакты"
								placeholder="Укажите ФИО родственника/друга/жены"
							/>

							<span>
								<Select placeholder="Выбрать" options={options} displayEmpty />
								<PhoneField maskType={2} />
							</span>
						</S.AdditionalContacts>

						<Button color="green" startIcon={<PlusIcon />}>
							Добавить еще
						</Button>
					</Section>

					<Section
						label="Водительское удостоверение"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<S.FieldsRow>
							<TextField label="Серия" placeholder="Укажите серию" />
							<TextField label="Номер" placeholder="Укажите номер" />
						</S.FieldsRow>

						<TextField label="Код подразделения ГИБДД" placeholder="Укажите данные" />
						<DateField label="Действителен до" />
					</Section>
				</S.FormColumn>

				<S.Divider />

				<S.FormColumn>
					<Section
						label="Паспортные данные"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<S.FieldsRow>
							<InputMask alwaysShowMask={false} mask="99 99">
								<TextField label="Серия" placeholder="Укажите серию" />
							</InputMask>

							<InputMask alwaysShowMask={false} mask="999 999" placeholder="Укажите номер">
								<TextField label="Номер" />
							</InputMask>
						</S.FieldsRow>

						<TextField label="Кем выдан" placeholder="Укажите данные" />

						<S.FieldsRow>
							<DateField label="Дата выдачи" />
							<TextField label="Код подразденеия" placeholder="Укажите код" />
						</S.FieldsRow>

						<Textarea label="Адрес прописки" placeholder="Укажите Ваш текущий адрес проживания" />
					</Section>

					<Section label="Фактический адрес проживания">
						<Textarea placeholder="Укажите Ваш текущий адрес проживания" />
					</Section>

					<Section
						label="Кисиарт ID"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<TextField placeholder="Укажите Ваш текущий адрес проживания" />
					</Section>

					<Section label="Привязка профилей">
						<TextField placeholder="Введите имя" InputProps={{ endAdornment: <LoupeIcon /> }} />

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
			</form>
		</S.IndividualCardData>
	)
}
