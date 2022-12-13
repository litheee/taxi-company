import { CarCard, Filters, Stats } from './components'

import * as S from './Cars.styled'

export const Cars = () => {
	return (
		<S.Cars>
			<Filters />
			<Stats />

			<S.CarsList>
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
			</S.CarsList>
		</S.Cars>
	)
}
