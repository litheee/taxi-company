import { Fragment, useState } from 'react'
import Radio from '@mui/material/Radio'

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
		{ label: 'Депозит', value: 'Депозит' },
		{ label: 'Внутренний', value: 'Внутренний' },
		{ label: 'Яндекс', value: 'Яндекс' }
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

			<Select name="balance" defaultValue="Депозит" placeholder="Выберите баланс" options={balances} />

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
