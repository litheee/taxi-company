import { TextField, Select, Button, MenuItem } from 'ui'

import * as S from './Transfer.styled'

import ArrowRightIcon from 'public/icons/arrow-right.svg'

export const TransferTab = () => {
	const balances = [
		{ name: 'deposit', label: 'Депозит' },
		{ name: 'internal', label: 'Внутренний' },
		{ name: 'yandex', label: 'Яндекс' }
	]

	const balanceMenuItems = balances.map(({ name, label }) => {
		return (
			<MenuItem key={name} value={label}>
				{label}
			</MenuItem>
		)
	})

	return (
		<S.TransferTab>
			<TextField type="number" name="depositAmount" placeholder="Введите сумму" />

			<S.SelectRow>
				<Select name="balanceFrom" defaultValue="Депозит" placeholder="Откуда">
					{balanceMenuItems}
				</Select>

				<S.ArrowIcon>
					<ArrowRightIcon />
				</S.ArrowIcon>

				<Select name="balanceTo" defaultValue="Внутренний" placeholder="Куда">
					{balanceMenuItems}
				</Select>
			</S.SelectRow>

			<Button color="green" fullWidth>
				Перевести
			</Button>
		</S.TransferTab>
	)
}
