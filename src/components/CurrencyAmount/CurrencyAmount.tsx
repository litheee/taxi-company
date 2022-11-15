import * as S from './CurrencyAmount.styled'

import RubIcon from 'public/icons/rub.svg'

interface CurrencyAmountProps {
	value: number
}

export const CurrencyAmount = ({ value }: CurrencyAmountProps) => {
	return (
		<S.CurrencyAmount>
			{Number(value).toLocaleString()}

			<RubIcon />
		</S.CurrencyAmount>
	)
}
