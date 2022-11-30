import { MouseEvent, useState } from 'react'

import { Section, FilterSelect, Heading } from 'components/common'
import { Button, Checkbox, Select, TextField } from 'ui'

import * as S from './Table.styled'

import GearIcon from 'public/icons/gear.svg'
import FilterIcon from 'public/icons/filter.svg'
import LoupeIcon from 'public/icons/loupe.svg'
import MoveIcon from 'public/icons/move.svg'

export const Filters = () => {
	const [filtersPopoverAnchorEl, setFiltersPopoverAnchorEl] = useState<HTMLButtonElement | null>(null)
	const [additionalFiltersPopoverAnchorEl, setAdditionalFiltersPopoverAnchorEl] = useState<HTMLButtonElement | null>(
		null
	)

	const isFiltersPopoverOpen = Boolean(filtersPopoverAnchorEl)
	const isAdditionalFiltersPopoverOpen = Boolean(additionalFiltersPopoverAnchorEl)

	const openFiltersPopover = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setFiltersPopoverAnchorEl(currentTarget)
	}

	const openAdditionalFiltersPopover = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setAdditionalFiltersPopoverAnchorEl(currentTarget)
	}

	const closeFiltersPopover = () => {
		setFiltersPopoverAnchorEl(null)
	}

	const closeAdditionalFiltersPopover = () => {
		setAdditionalFiltersPopoverAnchorEl(null)
	}

	const firstColumnCheckbox = [
		'Статус',
		'Марка',
		'Модель',
		'Год',
		'Госномер',
		'СТС',
		'VIN',
		'Пробег',
		'КПП',
		'КПП',
		'Собственник',
		'Цвет'
	]

	const secondColumnCheckbox = [
		'пункт, в две строки',
		'Марка',
		'Модель',
		'Год',
		'Госномер',
		'СТС',
		'VIN',
		'Пробег',
		'КПП',
		'Собственник',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет'
	]

	const thirdColumnCheckbox = [
		'Марка',
		'Модель',
		'Год',
		'Госномер',
		'СТС',
		'VIN',
		'Пробег',
		'пункт, в две строки',
		'КПП',
		'Собственник',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет',
		'Цвет'
	]

	const options = [
		{ label: '1', value: 1 },
		{ label: '2', value: 2 },
		{ label: '3', value: 3 }
	]

	const options2 = [
		{ label: 'Все', value: 'Все' },
		{ label: 'Остальные', value: 'Остальные' }
	]

	return (
		<>
			<S.Filters>
				<TextField
					name="search"
					placeholder="Введите статус, год и пр."
					InputProps={{
						endAdornment: <LoupeIcon />
					}}
				/>

				<S.FilterText>
					<FilterIcon /> Фильтры:
				</S.FilterText>

				<S.SelectGroup>
					<FilterSelect placeholder="Статус:" defaultValue="Все" options={options2} />
					<FilterSelect placeholder="Год:" defaultValue="Все" options={options2} />
					<FilterSelect placeholder="Собственник:" defaultValue="Все" options={options2} />
				</S.SelectGroup>

				<S.FiltersButton open={isFiltersPopoverOpen} onClick={openFiltersPopover}>
					<GearIcon />
				</S.FiltersButton>

				<S.AdditionalFiltersButton open={isAdditionalFiltersPopoverOpen} onClick={openAdditionalFiltersPopover}>
					Дополнительные фильтры
				</S.AdditionalFiltersButton>
			</S.Filters>

			<S.FiltersPopover
				open={isFiltersPopoverOpen}
				anchorEl={filtersPopoverAnchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				onClose={closeFiltersPopover}
			>
				<form>
					<S.FormContent>
						<S.FormColumn>
							{firstColumnCheckbox.map((label) => {
								return (
									<S.CheckboxMoveRow key={label}>
										<Checkbox label={label} />

										<button>
											<MoveIcon />
										</button>
									</S.CheckboxMoveRow>
								)
							})}
						</S.FormColumn>

						<S.Divider />

						<S.FormColumn>
							{secondColumnCheckbox.map((label) => {
								return <Checkbox key={label} label={label} />
							})}
						</S.FormColumn>

						<S.Divider />

						<S.FormColumn>
							{thirdColumnCheckbox.map((label) => {
								return <Checkbox key={label} label={label} />
							})}
						</S.FormColumn>
					</S.FormContent>

					<Button color="green" fullWidth onClick={closeFiltersPopover}>
						Закончить
					</Button>
				</form>
			</S.FiltersPopover>

			<S.AdditionalFiltersPopover
				open={isAdditionalFiltersPopoverOpen}
				anchorEl={additionalFiltersPopoverAnchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				onClose={closeAdditionalFiltersPopover}
			>
				<form>
					<S.FormContent>
						<S.FormColumn>
							<Heading>Числа</Heading>
							<S.FieldsRow>
								<TextField placeholder="от" />
								<TextField placeholder="до" />
							</S.FieldsRow>

							<Heading>Адрес электронной почты</Heading>
							<Section divider={false}>
								<Checkbox label="Парковый автомобиль" />
								<Checkbox label="Парковый автомобиль" />
								<Checkbox label="Парковый автомобиль" />
							</Section>

							<Heading>Адрес электронной почты</Heading>
							<Section divider={false}>
								<S.CheckboxGrid>
									<Checkbox label="Чекбокс" />
									<Checkbox label="Чекбокс" />
									<Checkbox label="Чекбокс" />
									<Checkbox label="Чекбокс" />
								</S.CheckboxGrid>
							</Section>
						</S.FormColumn>

						<S.Divider />

						<S.FormColumn>
							<Heading>Выпадающий список</Heading>
							<Section divider={false}>
								<Select placeholder="Выбрать" options={options} />
							</Section>

							<Section label="" divider={false}>
								<S.FieldsRow>
									<TextField label="Поле" placeholder="_ ___ __" />
									<Select label="Список" placeholder="123" options={options} />
								</S.FieldsRow>
							</Section>
						</S.FormColumn>
					</S.FormContent>

					<Button color="green" fullWidth onClick={closeAdditionalFiltersPopover}>
						Закончить
					</Button>
				</form>
			</S.AdditionalFiltersPopover>
		</>
	)
}
