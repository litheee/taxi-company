import { useState } from 'react'

import { DatePicker, TextField } from 'ui'

import * as S from './MoneyFlowTableHead.styled'

import IncomeIcon from 'public/icons/income.svg'
import OutcomeIcon from 'public/icons/outcome.svg'
import LoupeIcon from 'public/icons/loupe.svg'

interface MoneyFlowTableHeadProps {
	variant: 'income' | 'outcome'
}

export const MoneyFlowTableHead = ({ variant }: MoneyFlowTableHeadProps) => {
	const [dateRange, setDateRange] = useState<(Date | null)[]>([null, null])
	const [startDate, endDate] = dateRange

	return (
		<S.MoneyFlowTableHead>
			<S.Text variant="h1">
				<S.VariantIcon>{variant === 'income' ? <IncomeIcon /> : <OutcomeIcon />}</S.VariantIcon>
				{variant === 'income' ? 'Приход' : 'Расход'}
			</S.Text>

			<S.Filters>
				<DatePicker selectsRange={true} startDate={startDate} endDate={endDate} onChange={setDateRange} />

				<TextField placeholder="Введите статус,год и пр." InputProps={{ endAdornment: <LoupeIcon /> }} />
			</S.Filters>
		</S.MoneyFlowTableHead>
	)
}
