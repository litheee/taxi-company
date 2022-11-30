import * as S from './CurrencyAmount.styled'

interface CurrencyAmountProps {
	value: number
}

export const CurrencyAmount = ({ value }: CurrencyAmountProps) => {
	return (
		<S.CurrencyAmount>
			{Number(value).toLocaleString()}

			<S.Currency>₽</S.Currency>
		</S.CurrencyAmount>
	)
}
