import Head from 'next/head'

import { CarsRent } from 'components/cars'
import { BankCardsRequisites } from 'components/requisites'

const RequisitesPage = () => {
	return (
		<>
			<Head>
				<title>Реквизиты и карты</title>
			</Head>

			<CarsRent action="end" />

			<BankCardsRequisites />
		</>
	)
}

export default RequisitesPage
