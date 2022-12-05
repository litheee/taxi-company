import { useState } from 'react'

import { IncomeExpenseStatsRow, IncomeExpenseTable, IncomeExpenseAddTableRecordModal } from './components'

import * as S from './IncomeExpense.styled'

interface Stats {
	income: number
	expense: number
	profit: number
}

interface IncomeExpenseProps {
	stats: Stats
}

export const IncomeExpense = ({ stats }: IncomeExpenseProps) => {
	const [isAddTableRecordModalOpen, setAddTableRecordModalOpen] = useState(false)

	const toggleAddTableRecordModal = () => {
		setAddTableRecordModalOpen(!isAddTableRecordModalOpen)
	}

	return (
		<>
			<S.IncomeExpense>
				<IncomeExpenseStatsRow stats={stats} onAddItem={toggleAddTableRecordModal} />

				<S.TablesRow>
					<IncomeExpenseTable variant="income" />
					<IncomeExpenseTable variant="expense" />
				</S.TablesRow>
			</S.IncomeExpense>

			<IncomeExpenseAddTableRecordModal open={isAddTableRecordModalOpen} onClose={toggleAddTableRecordModal} />
		</>
	)
}
