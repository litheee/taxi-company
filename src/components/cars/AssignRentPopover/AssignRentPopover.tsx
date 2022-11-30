import { PopoverProps } from '@mui/material/Popover'

import { Autocomplete, TextField, Select, Button } from 'ui'

import * as S from './AssignRentPopover.styled'

import LoupeIcon from 'public/icons/loupe.svg'

export const CarAssignRentPopover = (props: PopoverProps) => {
	const terms = [
		{ label: 'Условие 1', value: 'Условие 1' },
		{ label: 'Условие 2', value: 'Условие 2' },
		{ label: 'Условие 3', value: 'Условие 3' }
	]

	const cars = [
		'Hyundai Sonata MB1342CP',
		'Hyundai Sonata ВМ1597СР',
		'Hyundai Sonata MB1342CP',
		'Hyundai Sonata ВМ1597СР'
	]

	return (
		<S.CarAssignRentPopover
			{...props}
			heading="Назначить аренду"
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			transformOrigin={{ horizontal: 'left', vertical: 'top' }}
		>
			<S.Form>
				<Autocomplete
					options={cars}
					renderInput={(params) => {
						return (
							<TextField
								{...params}
								label="Выберите автомобиль"
								InputProps={{ ...params.InputProps, endAdornment: <LoupeIcon /> }}
							/>
						)
					}}
				/>

				<S.FieldsRow>
					<Select name="terms" label="Условия" options={terms} />
					<TextField label="Сумма" />
				</S.FieldsRow>

				<Select label="Депозит" options={terms} />

				<TextField label="Сумма" />

				<Button fullWidth color="green">
					Назначить
				</Button>
			</S.Form>
		</S.CarAssignRentPopover>
	)
}
