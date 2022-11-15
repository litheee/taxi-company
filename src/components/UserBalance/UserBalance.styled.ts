import styled from '@emotion/styled'
import MuiPopover from '@mui/material/Popover'

import { Box, ButtonGroup } from 'styled/components'

import { CurrencyAmount } from 'components/CurrencyAmount/CurrencyAmount.styled'
import { MenuButton } from 'ui/MenuButton/MenuButton.styled'

export { ButtonGroup }

export const UserBalance = styled.div`
	${MenuButton} {
		${CurrencyAmount} {
			margin-left: 5px;
		}
	}
`

export const Popover = styled(MuiPopover)`
	.MuiPaper-root {
		width: 334px;

		& > *:not(:last-child) {
			margin-bottom: 15px;
		}
	}
`

export const BalanceList = styled(Box)`
	li {
		&:not(:last-child) {
			margin-bottom: 15px;
		}
	}
`

export const BalanceRow = styled.div`
	display: flex;
	justify-content: space-between;
`

export const BalanceRowBorder = styled.div`
	width: 100%;
	height: 3px;
	margin-top: 5px;
	background: var(--gradient-blue);
	border-radius: 5px;
`

export const BalanceAmount = styled.div``

export const Currency = styled.span`
	margin-left: 5px;
	color: var(--color-gray-100);
`
