import Head from 'next/head'

import { CarsRent } from 'components/cars'
import { BankCardsRequisites } from 'components/requisites'
import { CounterpartiesLayout } from 'components/layouts'

const RequisitesPage = () => {
	return (
		<>
			<Head>
				<title>Реквизиты и карты</title>
			</Head>

			<CounterpartiesLayout>
				<CarsRent action="end" />

				<BankCardsRequisites />
			</CounterpartiesLayout>
		</>
	)
}

export default RequisitesPage
