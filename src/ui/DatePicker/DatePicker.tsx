import { ReactDatePickerProps, registerLocale } from 'react-datepicker'
import InputMask from 'react-input-mask'
import ru from 'date-fns/locale/ru'

import * as S from './DatePicker.styled'

import CalendarIcon from 'public/icons/calendar.svg'
import ArrowDownIcon from 'public/icons/arrow-down.svg'

registerLocale('ru', ru)

export const DatePicker = <
	CustomModifierNames extends string = never,
	WithRange extends boolean | undefined = undefined
>(
	props: ReactDatePickerProps<CustomModifierNames, WithRange>
) => {
	const { selectsRange: isRangePicker, onChange } = props

	const isValidDate = (date: Date) => {
		return date instanceof Date && !isNaN(date.getTime())
	}

	return (
		<S.DatePickerContainer>
			<CalendarIcon />

			<S.DatePagination range={isRangePicker}>
				<S.PrevButton>
					<ArrowDownIcon />
				</S.PrevButton>

				<S.DatePicker
					showPopperArrow={false}
					placeholderText={isRangePicker ? '00.00.00 - 00.00.00' : '00.00.0000'}
					dateFormat={isRangePicker ? 'dd.MM.yy' : 'dd.MM.yyyy'}
					locale="ru"
					popperPlacement="bottom-end"
					popperModifiers={[
						{
							name: 'offset',
							options: {
								offset: [0, 20]
							}
						}
					]}
					onChangeRaw={(e) => {
						if (!isRangePicker) return

						const { value } = e.target

						if (!value) {
							onChange(
								[null, null] as WithRange extends false | undefined ? Date | null : [Date | null, Date | null],
								e
							)
							return
						}

						const [startDate, endDate] = value.split(' - ')

						if (isValidDate(new Date(startDate))) {
							const [day, month, year] = startDate.split('.')

							onChange(
								[new Date(`${month}.${day}.${year}`), props.endDate] as WithRange extends false | undefined
									? Date | null
									: [Date | null, Date | null],
								e
							)
						}

						if (isValidDate(new Date(endDate))) {
							const [day, month, year] = endDate.split('.')

							onChange(
								[props.startDate, new Date(`${month}.${day}.${year}`)] as WithRange extends false | undefined
									? Date | null
									: [Date | null, Date | null],
								e
							)
						}
					}}
					customInput={
						isRangePicker ? (
							<InputMask mask="99.99.99 - 99.99.99" value={`${props.startDate} - ${props.endDate}`} />
						) : (
							<InputMask mask="99.99.9999" />
						)
					}
					{...props}
				/>

				<S.NextButton>
					<ArrowDownIcon />
				</S.NextButton>
			</S.DatePagination>
		</S.DatePickerContainer>
	)
}
