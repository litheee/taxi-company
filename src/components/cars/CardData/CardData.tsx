import { useForm, FormProvider } from 'react-hook-form'

import { AvatarUpload, SearchField, Section } from 'components/common'
import { TextField, Select, Button, Checkbox } from 'ui'
import { DateField, LicensePlateField } from 'ui/maskedFields'

import * as S from './CardData.styled'

import CarIcon from 'public/icons/car.svg'
import PlusIcon from 'public/icons/plus.svg'

import DownloadIcon from 'public/icons/download.svg'

export const CarCardData = () => {
	const useFormProps = useForm()

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
		<FormProvider {...useFormProps}>
			<S.Form>
				<S.FormColumn>
					<AvatarUpload icon={<CarIcon />} />

					<Section label="Информация по автомобилю">
						<Select
							name="brand"
							label="Марка"
							placeholder="Выберите марку"
							options={brands}
						/>
						<Select
							name="model"
							label="Модель"
							placeholder="Выберите модель"
							options={models}
						/>

						<S.FieldsRow>
							<LicensePlateField name="licensePlate" label="ГОС номер" />

							<Select
								name="productionYear"
								label="Год выпуска"
								placeholder="Выберите год"
								options={years}
							/>
						</S.FieldsRow>

						<Select
							name="color"
							label="Цвет"
							placeholder="Выберите цвет"
							options={colors}
						/>
						<TextField
							name="mileage"
							label="Пробег"
							placeholder="Выберите марку"
						/>
						<Select
							name="transmissionType"
							label="Тип КПП"
							placeholder="Выберите Тип"
							options={types}
						/>
					</Section>
				</S.FormColumn>

				<S.Divider />

				<S.FormColumn>
					<TextField
						name="mileageCorrection"
						label="Поправка пробега"
						placeholder="Введите поправку пробега"
					/>

					<Section label="VIN" divider={false}>
						<TextField
							name="vin"
							placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _"
						/>
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
						<TextField name="sts" placeholder="_ _ _ _ _ _ _ _ _ _" />
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
						<TextField name="pts" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _" />
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
						<TextField name="authNumber" placeholder="_ _ _ _ _ _ _ _ _ _" />
					</Section>

					<Section label="Собственник" divider={false}>
						<TextField name="owner" placeholder="Введите ФИО" />
					</Section>

					<Section label="Статус" divider={false}>
						<Select
							name="status"
							placeholder="Выберите статус"
							options={statuses}
						/>
					</Section>

					<Section
						label="ОСАГО"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<TextField
							name="osagoNumber"
							label="Номер"
							placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _"
						/>
					</Section>
				</S.FormColumn>

				<S.Divider />

				<S.FormColumn>
					<DateField name="osagoDateEnd" label="Дата окончания" />

					<Section
						label="КАСКО"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<TextField
							name="kaskoNumber"
							label="Номер"
							placeholder="Введите номер"
						/>
						<DateField name="kaskoDateEnd" label="Дата окончания" />
					</Section>

					<Section
						label="Диагностическая карта"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					>
						<TextField
							name="diagnosticNumber"
							label="Номер"
							placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _"
						/>
						<DateField name="diagnosticDateEnd" label="Дата окончания" />
					</Section>

					<Section label="Привязка профилей">
						<SearchField name="profile" placeholder="Введите имя" />

						<Button color="green" startIcon={<PlusIcon />}>
							Добавить еще
						</Button>
					</Section>

					<Checkbox name="parkCar" label="Парковый автомобиль" />
				</S.FormColumn>
			</S.Form>
		</FormProvider>
	)
}
