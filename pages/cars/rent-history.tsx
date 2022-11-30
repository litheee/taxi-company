import Head from 'next/head'

import { CarsRent } from 'components/cars'

const CarsRentHistoryPage = () => {
	return (
		<>
			<Head>
				<title>История аренды</title>
			</Head>

			<CarsRent action="assign" />
		</>
	)
}

export default CarsRentHistoryPage
