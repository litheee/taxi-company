import { useState } from 'react'
import Radio from '@mui/material/Radio'
import MenuItem from '@mui/material/MenuItem'

import { CurrencyAmount } from 'components'
import { TextField, Select } from 'ui'

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

	const optionsRadioItems = options.map(({ name, label, icon }, idx, arr) => {
		return (
			<>
				<S.FormControlLabel
					key={name}
					value={name}
					label={label}
					checked={name === selectedOption}
					onClick={() => {
						setSelectedOption(name)
					}}
					control={<Radio icon={icon} checkedIcon={icon} />}
				/>

				{arr.length !== idx + 1 ? <S.Divider /> : null}
			</>
		)
	})

	const balanceMenuItems = balances.map(({ name, label }) => {
		return (
			<MenuItem key={name} value={name}>
				{label}
			</MenuItem>
		)
	})

	return (
		<S.DepositTab>
			<S.RadioGroup>{optionsRadioItems}</S.RadioGroup>

			<TextField type="number" name="depositAmount" placeholder="Введите сумму" />

			<Select name="balance" defaultValue="deposit" label="Выберите баланс">
				{balanceMenuItems}
			</Select>

			<S.Total>
				<span>К оплате:</span>

				<CurrencyAmount value={1030} />
			</S.Total>
		</S.DepositTab>
	)
}
