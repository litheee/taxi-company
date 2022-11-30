import Head from 'next/head'

import { MoneyFlowStats } from 'components/common'
import { CounterpartiesMoneyFlowTable } from 'components/counterparties'

import * as S from 'styled/pages/CounterpartiesMoneyFlow'

const CounterpartiesMoneyFlow = () => {
	return (
		<>
			<Head>
				<title>Приход/Расход</title>
			</Head>

			<S.CounterpartiesMoneyFlowPage>
				<MoneyFlowStats />

				<S.TablesRow>
					<CounterpartiesMoneyFlowTable variant="income" />
					<CounterpartiesMoneyFlowTable variant="outcome" />
				</S.TablesRow>
			</S.CounterpartiesMoneyFlowPage>
		</>
	)
}

export default CounterpartiesMoneyFlow
