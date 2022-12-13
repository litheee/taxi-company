import Head from 'next/head'

import { CarsLayout } from 'components/layouts'
import { CarsRent } from 'components/cars'
import { BankCardsRequisites } from 'components/requisites'
import { PenaltiesTable } from 'components'

import * as S from 'styled/pages/Penalties'

const PenaltiesPage = () => {
	return (
		<>
			<Head>
				<title>Машина</title>
			</Head>

			<CarsLayout>
				<S.PenaltiesPage>
					<CarsRent action="end" />

					<BankCardsRequisites />

					<PenaltiesTable />
				</S.PenaltiesPage>
			</CarsLayout>
		</>
	)
}

export default PenaltiesPage
