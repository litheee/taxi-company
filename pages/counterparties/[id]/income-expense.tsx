import Head from 'next/head'

import { IncomeExpense } from 'components'
import { CounterpartiesLayout } from 'components/layouts'

const CounterpartiesIncomeExpensePage = () => {
	const stats = {
		income: 500_000,
		expense: 50_000,
		profit: 450_000
	}

	return (
		<>
			<Head>
				<title>Приход/Расход</title>
			</Head>

			<CounterpartiesLayout>
				<IncomeExpense stats={stats} />
			</CounterpartiesLayout>
		</>
	)
}

export default CounterpartiesIncomeExpensePage
