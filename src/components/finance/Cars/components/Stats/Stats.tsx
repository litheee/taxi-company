import { CurrencyAmount } from 'components/common'

import * as S from './Stats.styled'

import ArrowUpIcon from 'public/icons/arrow-green-up.svg'
import { CarStatus } from 'components/cars'

export const Stats = () => {
	return (
		<S.Stats>
			<S.MoneyStats>
				<ArrowUpIcon />

				<S.MoneyRow>
					<CurrencyAmount value={50_000} />
					<span>сегодня</span>
				</S.MoneyRow>

				<S.Divider $orientation="vertical" />

				<S.MoneyRow>
					<CurrencyAmount value={20_000} />
					<span>сред. в день</span>
				</S.MoneyRow>

				<S.Divider $orientation="vertical" />

				<S.MoneyRow>
					<CurrencyAmount value={150_000} />
					<span>за месяц</span>
				</S.MoneyRow>
			</S.MoneyStats>

			<S.CarsStats>
				<S.Text variant="h1" as="p">
					Авто:
				</S.Text>

				<S.CarStatButtons>
					<S.CarStatButton>
						<S.Text variant="h1" as="p">
							{new Intl.NumberFormat().format(2_000)}
						</S.Text>
						<span>всего</span>
					</S.CarStatButton>

					<S.CarStatButton>
						<S.Text variant="h1" as="p">
							{new Intl.NumberFormat().format(1_000)}
						</S.Text>

						<CarStatus status="working" />
					</S.CarStatButton>

					<S.CarStatButton>
						<S.Text variant="h1" as="p">
							{new Intl.NumberFormat().format(500)}
						</S.Text>

						<CarStatus status="awaits" />
					</S.CarStatButton>

					<S.CarStatButton>
						<S.Text variant="h1" as="p">
							{new Intl.NumberFormat().format(495)}
						</S.Text>

						<CarStatus status="repairs" />
					</S.CarStatButton>

					<S.CarStatButton>
						<S.Text variant="h1" as="p">
							{new Intl.NumberFormat().format(5)}
						</S.Text>

						<CarStatus status="accident" />
					</S.CarStatButton>
				</S.CarStatButtons>
			</S.CarsStats>
		</S.Stats>
	)
}
