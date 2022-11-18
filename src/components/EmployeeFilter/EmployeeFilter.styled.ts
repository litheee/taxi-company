import { css } from '@emotion/react'
import styled from '@emotion/styled'
import MuiMenuItem from '@mui/material/MenuItem'

interface MenuButtonProps {
	open: boolean
}

export const EmployeeFilter = styled.div`
	display: flex;
	gap: 10px;
`

export const Chip = styled.div`
	padding: 2px;
	box-shadow: var(--box-shadow);
	border-radius: 5px;
	background: var(--gradient-green);

	&:hover > span {
		background: transparent;
	}

	& > span {
		display: flex;
		align-items: center;
		padding: 5px 8px;
		background: #000;
		border-radius: 5px;
		transition: 0.3s;

		button {
			margin-left: 10px;
		}
	}
`

export const EmployeeAdd = styled.div`
	display: flex;
	align-items: center;
	border-radius: 5px;
	padding-right: 2px;
	background: var(--gradient-green);
	box-shadow: var(--box-shadow);

	button:not(:first-of-type) {
		display: flex;
		align-items: center;
		height: 27px;
		padding: 0 10px;
		font-size: 15px;
		font-weight: 500;
		background: #000;
		transition: 0.3s;

		&:hover {
			background: transparent;
		}

		&:last-child {
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
		}

		& > svg {
			margin-left: 5px;
		}
	}
`

export const EmployeeAddButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 37px;
	height: 31px;
`

export const MenuItem = styled(MuiMenuItem)`
	font-size: 15px;
	font-weight: 500;
`

export const MenuButton = styled.button<MenuButtonProps>`
	span {
		margin-left: 5px;

		svg {
			transition: 0.3s;
		}
	}

	${({ open }) =>
		open &&
		css`
			background: transparent !important;

			svg {
				transform: rotate(180deg);
			}
		`}
`
