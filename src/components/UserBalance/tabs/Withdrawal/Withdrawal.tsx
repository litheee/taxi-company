import { TextField, Select, Button } from 'ui'

import * as S from './Withdrawal.styled'

export const WithdrawalTab = () => {
	const balances = [
		{ label: 'Депозит', value: 'Депозит' },
		{ label: 'Внутренний', value: 'Внутренний' },
		{ label: 'Яндекс', value: 'Яндекс' }
	]

	return (
		<S.WithdrawalTab>
			<TextField type="number" name="depositAmount" placeholder="Введите сумму" />
			<Select name="balance" defaultValue="Депозит" placeholder="Выберите баланс" options={balances} />

			<Button color="green" fullWidth>
				Вывести
			</Button>
		</S.WithdrawalTab>
	)
}
