import { AvatarUpload, TextField, FormSection, Select, Button, Checkbox } from 'ui'
import MenuItem from '@mui/material/MenuItem'

import * as S from './CarCardData.styled'

import CarIcon from 'public/icons/car.svg'
import PlusIcon from 'public/icons/plus.svg'
import LoupeIcon from 'public/icons/loupe.svg'

export const CarCardData = () => {
	return (
		<S.CarCardData>
			<form>
				<S.FormColumn>
					<AvatarUpload icon={<CarIcon />} />

					<FormSection label="Информация по автомобилю">
						<Select label="Марка" placeholder="Выберите марку">
							<MenuItem value="Марка 1">Марка 1</MenuItem>
							<MenuItem value="Марка 2">Марка 2</MenuItem>
							<MenuItem value="Марка 3">Марка 3</MenuItem>
						</Select>

						<Select label="Модель" placeholder="Выберите модель">
							<MenuItem value="Модель 1">Модель 1</MenuItem>
							<MenuItem value="Модель 2">Модель 2</MenuItem>
							<MenuItem value="Модель 3">Модель 3</MenuItem>
						</Select>

						<S.Row>
							<TextField label="ГОС номер" placeholder="_ ___ __" />

							<Select label="Год выпуска" placeholder="Выберите год">
								<MenuItem value="2001">2001</MenuItem>
								<MenuItem value="2002">2002</MenuItem>
								<MenuItem value="2003">2003</MenuItem>
							</Select>
						</S.Row>

						<Select label="Цвет" placeholder="Выберите цвет">
							<MenuItem value="Цвет 1">Цвет 1</MenuItem>
							<MenuItem value="Цвет 2">Цвет 2</MenuItem>
							<MenuItem value="Цвет 3">Цвет 3</MenuItem>
						</Select>

						<TextField label="Пробег" placeholder="Выберите марку" />

						<Select label="Тип КПП" placeholder="Выберите Тип">
							<MenuItem value="Тип 1">Тип 1</MenuItem>
							<MenuItem value="Тип 2">Тип 2</MenuItem>
							<MenuItem value="Тип 3">Тип 3</MenuItem>
						</Select>
					</FormSection>
				</S.FormColumn>

				<S.Divider />

				<S.FormColumn>
					<FormSection label="VIN" divider={false}>
						<TextField placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _" />
					</FormSection>

					<FormSection label="СТС" download divider={false}>
						<TextField placeholder="_ _ _ _ _ _ _ _ _ _" />
					</FormSection>

					<FormSection label="ПТС" download divider={false}>
						<TextField placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _" />
					</FormSection>

					<FormSection label="Номер разрешения" download divider={false}>
						<TextField placeholder="_ _ _ _ _ _ _ _ _ _" />
					</FormSection>

					<FormSection label="Собственник" divider={false}>
						<TextField placeholder="Введите ФИО" />
					</FormSection>

					<FormSection label="Статус" divider={false}>
						<Select placeholder="Выберите статус">
							<MenuItem value="Статус 1">Статус 1</MenuItem>
							<MenuItem value="Статус 2">Статус 2</MenuItem>
							<MenuItem value="Статус 3">Статус 3</MenuItem>
						</Select>
					</FormSection>

					<FormSection label="ОСАГО" download>
						<TextField label="Номер" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _" />
						<TextField label="Дата окончания" placeholder="__.__.____" />
					</FormSection>
				</S.FormColumn>

				<S.Divider />

				<S.FormColumn>
					<FormSection label="КАСКО" download>
						<TextField label="Номер" placeholder="Введите номер" />
						<TextField label="Дата окончания" placeholder="__.__.____ " />
					</FormSection>

					<FormSection label="Диагностическая карта" download>
						<TextField label="Номер" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _" />
						<TextField label="Дата окончания" placeholder="__.__.____ " />
					</FormSection>

					<FormSection label="Привязка профилей">
						<TextField name="name" placeholder="Введите имя" InputProps={{ endAdornment: <LoupeIcon /> }} />

						<Button color="green" startIcon={<PlusIcon />}>
							Добавить еще
						</Button>
					</FormSection>

					<S.CheckboxRow>
						<Checkbox />
						<span>Парковый автомобиль</span>
					</S.CheckboxRow>
				</S.FormColumn>
			</form>
		</S.CarCardData>
	)
}
