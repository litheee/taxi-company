import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Menu as MenuUI } from 'ui'
import { Menu } from 'ui/Menu/Menu.styled'
import { MenuItem } from 'ui/MenuItem/MenuItem.styled'
import { TextField } from 'ui/TextField/TextField.styled'

interface MenuButtonProps {
	open: boolean
}

export const EmployeeFilter = styled.div`
	display: flex;
	gap: 10px;

	${Menu} ${MenuItem} {
		font-size: 15px;
		font-weight: 500;
	}
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

// NEW

export const MenuButton = styled.button<MenuButtonProps>`
	position: relative;
	padding: 7px 10px;
	border-radius: 5px;
	background-image: linear-gradient(0deg, #19560a, #19560a),
		linear-gradient(
			268.87deg,
			#88b114 -10.28%,
			#558f09 27.63%,
			#2c7400 73.22%,
			#408104 100%
		);

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: 0;
		background-image: linear-gradient(
			268.87deg,
			#88b114 -10.28%,
			#558f09 27.63%,
			#2c7400 73.22%,
			#408104 100%
		);
		border-radius: inherit;
		transition: 0.3s;
	}

	&:hover {
		&::before {
			opacity: 0;
		}
	}

	& > span {
		position: relative;
		display: flex;
		z-index: 1;

		span {
			margin-left: 5px;

			svg {
				transition: 0.3s;
			}
		}
	}

	${({ open }) =>
		open &&
		css`
			&::before {
				background-image: linear-gradient(0deg, #19560a, #19560a),
					linear-gradient(
						268.87deg,
						#88b114 -10.28%,
						#558f09 27.63%,
						#2c7400 73.22%,
						#408104 100%
					);
			}

			svg {
				transform: rotate(180deg);
			}
		`}
`

export const RolesMenu = styled(MenuUI)`
	.MuiPaper-root {
		padding: 15px 10px 5px;
		background: var(--color-gray-200);
	}

	${TextField} {
		.MuiInput-root {
			background: #1f2225;
		}
	}
`

export const RolesMenuList = styled.div`
	margin-top: 10px;

	${MenuItem} {
		height: 33px;

		&:not(:last-child) {
			margin-bottom: 0;
		}
	}
`

export const RolesListContainer = styled.div`
	&:not(:last-child) {
		position: relative;
		padding-bottom: 2px;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			border-radius: 1px;
			background: var(--color-gray-300);
		}
	}

	& > span {
		display: flex;
		align-items: center;
		width: 100%;
		height: 33px;
		color: var(--color-gray-100);
	}
`

export const RolesList = styled.ul`
	${MenuItem} {
		font-size: 15px;
		font-weight: 500;
		line-height: 17px;
	}
`
