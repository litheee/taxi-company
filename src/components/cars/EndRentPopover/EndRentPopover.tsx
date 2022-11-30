import { PopoverProps } from '@mui/material/Popover'

import { Select, Textarea, Button, DatePicker } from 'ui'

import * as S from './EndRentPopover.styled'

export const CarEndRentPopover = (props: PopoverProps) => {
	const causes = [
		{ label: 'Штаное завершение аренды', value: 'Штаное завершение аренды' },
		{ label: 'ДТП', value: 'ДТП' },
		{ label: 'Поломка', value: 'Поломка' }
	]

	return (
		<S.CarEndRentPopover
			{...props}
			heading="Завершить аренду"
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			transformOrigin={{ horizontal: 'left', vertical: 'top' }}
		>
			<S.Form>
				<S.DateRow>
					<span>Дата</span>
					<DatePicker onChange={() => {}} />
				</S.DateRow>

				<S.Divider orientation="horizontal" />

				<Select label="Причина" options={causes} />

				<Textarea label="Комментарии" />

				<Button fullWidth color="blue">
					Завершить
				</Button>
			</S.Form>
		</S.CarEndRentPopover>
	)
}
