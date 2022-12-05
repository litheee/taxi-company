import Head from 'next/head'

import { CounterpartiesTable } from 'components/counterparties'

const CounterpartiesDashboardPage = () => {
	return (
		<>
			<Head>
				<title>Контрагенты</title>
			</Head>

			<CounterpartiesTable />
		</>
	)
}

export default CounterpartiesDashboardPage
