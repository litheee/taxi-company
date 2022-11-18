import MenuItem from '@mui/material/MenuItem'

import { TextField, Select, Button } from 'ui'

import * as S from './Withdrawal.styled'

export const WithdrawalTab = () => {
	const balances = [
		{ name: 'deposit', label: 'Депозит' },
		{ name: 'internal', label: 'Внутренний' },
		{ name: 'yandex', label: 'Яндекс' }
	]

	return (
		<S.WithdrawalTab>
			<TextField type="number" name="depositAmount" placeholder="Введите сумму" />

			<Select name="balance" defaultValue="Депозит" placeholder="Выберите баланс">
				{balances.map(({ name, label }) => {
					return (
						<MenuItem key={name} value={label}>
							{label}
						</MenuItem>
					)
				})}
			</Select>

			<Button color="green" fullWidth>
				Вывести
			</Button>
		</S.WithdrawalTab>
	)
}
