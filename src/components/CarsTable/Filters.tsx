import { MouseEvent, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'

import { FilterSelect } from 'common'
import { Button, Checkbox, FormSection, Select, TextField } from 'ui'

import * as S from './CarsTable.styled'

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
					<FilterSelect placeholder="Статус:" defaultValue="Все">
						<MenuItem value="Все">Все</MenuItem>
						<MenuItem value="Остальные">Остальные</MenuItem>
					</FilterSelect>

					<FilterSelect placeholder="Год:" defaultValue="Все">
						<MenuItem value="Все">Все</MenuItem>
						<MenuItem value="Остальные">Остальные</MenuItem>
					</FilterSelect>

					<FilterSelect placeholder="Собственник:" defaultValue="Все">
						<MenuItem value="Все">Все</MenuItem>
						<MenuItem value="Остальные">Остальные</MenuItem>
					</FilterSelect>
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
							<S.FormRow>
								<TextField label="Числа" placeholder="От" />
								<TextField placeholder="До" />
							</S.FormRow>

							<FormSection label="Адрес электронной почты" divider={false}>
								<Checkbox label="Парковый автомобиль" />
								<Checkbox label="Парковый автомобиль" />
								<Checkbox label="Парковый автомобиль" />
							</FormSection>

							<FormSection label="Адрес электронной почты" divider={false}>
								<S.CheckboxGrid>
									<Checkbox label="Чекбокс" />
									<Checkbox label="Чекбокс" />
									<Checkbox label="Чекбокс" />
									<Checkbox label="Чекбокс" />
								</S.CheckboxGrid>
							</FormSection>
						</S.FormColumn>

						<S.Divider />

						<S.FormColumn>
							<FormSection label="Выпадающий список" divider={false}>
								<Select placeholder="Выбрать">
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
								</Select>
							</FormSection>

							<FormSection label="" divider={false}>
								<S.FormRow>
									<TextField label="Поле" placeholder="_ ___ __" />

									<Select placeholder="123">
										<MenuItem value={1}>1</MenuItem>
										<MenuItem value={2}>2</MenuItem>
										<MenuItem value={3}>3</MenuItem>
									</Select>
								</S.FormRow>
							</FormSection>
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
