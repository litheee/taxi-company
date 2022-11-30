import Head from 'next/head'

import { DriversTable } from 'components'

const DriversTablePage = () => {
	return (
		<>
			<Head>
				<title>Автомобили</title>
			</Head>

			<DriversTable />
		</>
	)
}

export default DriversTablePage
