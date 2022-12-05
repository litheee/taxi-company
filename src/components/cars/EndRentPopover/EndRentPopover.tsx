import { useState } from 'react'
import { PopoverProps } from '@mui/material/Popover'
import { FormProvider, useForm } from 'react-hook-form'

import { Select, Textarea, Button, DatePicker } from 'ui'

import * as S from './EndRentPopover.styled'

export const CarEndRentPopover = (props: PopoverProps) => {
	const useFormProps = useForm()
	const [date, setDate] = useState<Date | null>(null)

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
			<FormProvider {...useFormProps}>
				<S.Form>
					<S.DateRow>
						<span>Дата</span>
						<DatePicker selected={date} onChange={setDate} />
					</S.DateRow>

					<S.Divider orientation="horizontal" />

					<Select name="reason" label="Причина" options={causes} />

					<Textarea name="comment" label="Комментарии" />

					<Button fullWidth color="blue">
						Завершить
					</Button>
				</S.Form>
			</FormProvider>
		</S.CarEndRentPopover>
	)
}
