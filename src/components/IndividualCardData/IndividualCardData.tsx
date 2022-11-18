import MenuItem from '@mui/material/MenuItem'

import { AvatarUpload, Select, TextField, Button, Textarea, FormSection } from 'ui'

import * as S from './IndividualCardData.styled'

import ProfileIcon from 'public/icons/profile.svg'
import PlusIcon from 'public/icons/plus.svg'
import LoupeIcon from 'public/icons/loupe.svg'

export const IndividualCardData = () => {
	return (
		<S.IndividualCardData>
			<form>
				<S.FormColumn>
					<AvatarUpload icon={<ProfileIcon />} />

					<TextField name="fullName" placeholder="Укажите ваше ФИО" />

					<FormSection label="Водительское удостоверение">
						<TextField name="phone" label="Телефон" placeholder="Укажите телефон" />
						<TextField name="email" label="E-mail" placeholder="Укажите электронный адрес" />

						<S.AdditionalContacts>
							<TextField
								name="contactFullName"
								label="Дополнительные контакты"
								placeholder="Укажите ФИО родственника/друга/жены"
							/>

							<span>
								<Select placeholder="Выбрать" name="choose">
									<MenuItem value="Выбрать">Выбрать</MenuItem>
									<MenuItem value="Выбрать">Выбрать</MenuItem>
									<MenuItem value="Выбрать">Выбрать</MenuItem>
								</Select>

								<TextField name="contactPhone" placeholder="+7 (___) ___ __ __" />
							</span>
						</S.AdditionalContacts>

						<Button color="green" startIcon={<PlusIcon />}>
							Добавить еще
						</Button>
					</FormSection>

					<FormSection label="Водительское удостоверение" download>
						<S.Row>
							<TextField name="passportSeries" label="Серия" placeholder="Укажите серию" />
							<TextField name="passportNumber" label="Номер" placeholder="Укажите номер" />
						</S.Row>

						<TextField name="gibddCode" label="Код подразделения ГИБДД" placeholder="Укажите данные" />
						<TextField name="validUntilDate" label="Действителен до" placeholder="__.__.____" />
					</FormSection>
				</S.FormColumn>

				<S.Divider />

				<S.FormColumn>
					<FormSection label="Паспортные данные" download>
						<S.Row>
							<TextField name="passportSeries" label="Серия" placeholder="Укажите серию" />
							<TextField name="passportNumber" label="Номер" placeholder="Укажите номер" />
						</S.Row>

						<TextField name="passportSeries" label="Кем выдан" placeholder="Укажите данные" />

						<S.Row>
							<TextField name="date" label="Дата выдачи" placeholder="__.__.____" />
							<TextField name="code" label="Код подразденеия" placeholder="Укажите код" />
						</S.Row>

						<Textarea id="address" label="Адрес прописки" placeholder="Укажите Ваш текущий адрес проживания" />
					</FormSection>

					<FormSection label="Фактический адрес проживания">
						<Textarea id="address2" placeholder="Укажите Ваш текущий адрес проживания" />
					</FormSection>

					<FormSection label="Кисиарт ID" download>
						<TextField name="address" placeholder="Укажите Ваш текущий адрес проживания" />
					</FormSection>

					<FormSection label="Привязка профилей">
						<TextField name="name" placeholder="Введите имя" InputProps={{ endAdornment: <LoupeIcon /> }} />

						<Button color="green" startIcon={<PlusIcon />}>
							Добавить еще
						</Button>
					</FormSection>

					<FormSection label="Документы" download></FormSection>
				</S.FormColumn>
			</form>
		</S.IndividualCardData>
	)
}
