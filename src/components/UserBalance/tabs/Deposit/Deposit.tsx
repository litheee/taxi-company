import { Fragment, useState } from 'react'
import Radio from '@mui/material/Radio'
import MenuItem from '@mui/material/MenuItem'

import { CurrencyAmount } from 'components'
import { TextField, Select, Button } from 'ui'

import * as S from './Deposit.styled'

import SberPayIcon from 'public/icons/sberpay.svg'
import BankCardIcon from 'public/icons/bank-card.svg'

export const DepositTab = () => {
	const [selectedOption, setSelectedOption] = useState('')

	const options = [
		{ name: 'sberpay', label: 'СБП 1%', icon: <SberPayIcon /> },
		{ name: 'bank-card', label: 'Картой 3%', icon: <BankCardIcon /> }
	]

	const balances = [
		{ name: 'deposit', label: 'Депозит' },
		{ name: 'internal', label: 'Внутренний' },
		{ name: 'yandex', label: 'Яндекс' }
	]

	return (
		<S.DepositTab>
			<S.RadioGroup>
				{options.map(({ name, label, icon }, idx, arr) => {
					return (
						<Fragment key={name}>
							<S.FormControlLabel
								value={name}
								label={label}
								checked={name === selectedOption}
								onClick={() => {
									setSelectedOption(name)
								}}
								control={<Radio icon={icon} checkedIcon={icon} />}
							/>

							{arr.length !== idx + 1 ? <S.Divider /> : null}
						</Fragment>
					)
				})}
			</S.RadioGroup>

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

			<S.Total>
				<span>К оплате:</span>

				<CurrencyAmount value={1030} />
			</S.Total>

			<Button color="green" fullWidth>
				Пополнить
			</Button>
		</S.DepositTab>
	)
}
