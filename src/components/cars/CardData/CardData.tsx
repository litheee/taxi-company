import { AvatarUpload, Section } from 'components/common'
import { TextField, Select, Button, Checkbox } from 'ui'
import { DateField, LicensePlageField } from 'ui/maskedFields'

import * as S from './CardData.styled'

import CarIcon from 'public/icons/car.svg'
import PlusIcon from 'public/icons/plus.svg'
import LoupeIcon from 'public/icons/loupe.svg'
import DownloadIcon from 'public/icons/download.svg'

export const CarCardData = () => {
	const brands = [
		{ label: 'Марка 1', value: 'Марка 1' },
		{ label: 'Марка 2', value: 'Марка 2' },
		{ label: 'Марка 3', value: 'Марка 3' }
	]

	const models = [
		{ label: 'Модель 1', value: 'Модель 1' },
		{ label: 'Модель 2', value: 'Модель 2' },
		{ label: 'Модель 3', value: 'Модель 3' }
	]

	const years = [
		{ label: '2001', value: '2001' },
		{ label: '2002', value: '2002' },
		{ label: '2003', value: '2003' }
	]

	const colors = [
		{ label: 'Цвет 1', value: 'Цвет 1' },
		{ label: 'Цвет 2', value: 'Цвет 2' },
		{ label: 'Цвет 3', value: 'Цвет 3' }
	]

	const types = [
		{ label: 'Тип 1', value: 'Тип 1' },
		{ label: 'Тип 2', value: 'Тип 2' },
		{ label: 'Тип 3', value: 'Тип 3' }
	]

	const statuses = [
		{ label: 'Статус 1', value: 'Статус 1' },
		{ label: 'Статус 2', value: 'Статус 2' },
		{ label: 'Статус 3', value: 'Статус 3' }
	]

	return (
		<S.CarCardData>
			<form>
				<S.FormColumn>
					<AvatarUpload icon={<CarIcon />} />

					<Section label="Информация по автомобилю">
						<Select label="Марка" placeholder="Выберите марку" options={brands} />
						<Select label="Модель" placeholder="Выберите модель" options={models} />

						<S.FieldsRow>
							<LicensePlageField label="ГОС номер" />
							<Select label="Год выпуска" placeholder="Выберите год" options={years} />
						</S.FieldsRow>

						<Select label="Цвет" placeholder="Выберите цвет" options={colors} />
						<TextField label="Пробег" placeholder="Выберите марку" />
						<Select label="Тип КПП" placeholder="Выберите Тип" options={types} />
					</Section>
				</S.FormColumn>

				<S.Divider />

				<S.FormColumn>
					<TextField label="Поправка пробега" placeholder="Введите поправку пробега" />

					<Section label="VIN" divider={false}>
						<TextField placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _" />
					</Section>

					<Section
						label="СТС"
						divider={false}
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<TextField placeholder="_ _ _ _ _ _ _ _ _ _" />
					</Section>

					<Section
						label="ПТС"
						divider={false}
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<TextField placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _" />
					</Section>

					<Section
						label="Номер разрешения"
						divider={false}
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<TextField placeholder="_ _ _ _ _ _ _ _ _ _" />
					</Section>

					<Section label="Собственник" divider={false}>
						<TextField placeholder="Введите ФИО" />
					</Section>

					<Section label="Статус" divider={false}>
						<Select placeholder="Выберите статус" options={statuses} />
					</Section>

					<Section
						label="ОСАГО"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<TextField label="Номер" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _" />
					</Section>
				</S.FormColumn>

				<S.Divider />

				<S.FormColumn>
					<DateField label="Дата окончания" />

					<Section
						label="КАСКО"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<TextField label="Номер" placeholder="Введите номер" />
						<DateField label="Дата окончания" />
					</Section>

					<Section
						label="Диагностическая карта"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<TextField label="Номер" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _" />
						<DateField label="Дата окончания" />
					</Section>

					<Section label="Привязка профилей">
						<TextField name="name" placeholder="Введите имя" InputProps={{ endAdornment: <LoupeIcon /> }} />

						<Button color="green" startIcon={<PlusIcon />}>
							Добавить еще
						</Button>
					</Section>

					<Checkbox label="Парковый автомобиль" />
				</S.FormColumn>
			</form>
		</S.CarCardData>
	)
}
