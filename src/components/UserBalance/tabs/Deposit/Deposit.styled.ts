import { css } from '@emotion/react'
import styled from '@emotion/styled'
import MuiRadioGroup from '@mui/material/RadioGroup'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

import { CurrencyAmount } from 'components/CurrencyAmount/CurrencyAmount.styled'

export const DepositTab = styled.div`
	& > *:not(:last-child) {
		margin-bottom: 15px;
	}
`

export const RadioGroup = styled(MuiRadioGroup)`
	border-radius: 5px;
	background: var(--color-gray-200);
`

export const Divider = styled.div`
	width: calc(100% - 20px);
	height: 2px;
	margin: 0 10px;
	background: var(--color-gray-100);
	opacity: 0.1;
`

export const DepositOption = styled.div`
	display: flex;

	span {
		margin-left: 8px;
	}
`

export const FormControlLabel = styled(MuiFormControlLabel)`
	margin: 0;

	&:first-of-type {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	&:last-of-type {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.MuiRadio-root {
		padding: 8px;
	}

	${({ checked }) =>
		checked &&
		css`
			background: var(--gradient-green);
		`}
`

export const Total = styled.span`
	display: flex;
	align-items: center;

	span {
		&:first-child {
			color: var(--color-gray-100);
		}
	}

	${CurrencyAmount} {
		margin-left: 8px;
	}
`
