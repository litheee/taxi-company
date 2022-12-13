import Head from 'next/head'

import { CarsRent } from 'components/cars'
import { CounterpartiesLayout } from 'components/layouts'

const RentHistoryPage = () => {
	return (
		<>
			<Head>
				<title>История аренды</title>
			</Head>

			<CounterpartiesLayout>
				<CarsRent action="assign" />
			</CounterpartiesLayout>
		</>
	)
}

export default RentHistoryPage
