import Head from 'next/head'

import { CarsTable } from 'components/cars'

const CarsPage = () => {
	return (
		<>
			<Head>
				<title>Машины</title>
			</Head>

			<CarsTable />
		</>
	)
}

export default CarsPage
