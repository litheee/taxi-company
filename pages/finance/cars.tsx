import Head from 'next/head'

import { FinanceLayout } from 'components/layouts'
import { Cars } from 'components/finance'

const CarsPage = () => {
	return (
		<>
			<Head>
				<title>Автомобили</title>
			</Head>

			<FinanceLayout>
				<Cars />
			</FinanceLayout>
		</>
	)
}

export default CarsPage
