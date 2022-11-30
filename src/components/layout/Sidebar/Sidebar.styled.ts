import { css } from '@emotion/react'
import styled from '@emotion/styled'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'

interface MenuSubProps {
	expanded: boolean
}

interface SidebarProps {
	open: boolean
}

export const MenuListItem = styled.li`
	padding: 0 10px;
	transition: 0.3s;

	&:not(:last-child) {
		margin-bottom: 5px;
	}

	a {
		display: flex;
		align-items: center;
	}

	&:hover {
		background: rgba(55, 63, 72, 0.5);
	}
`

export const MenuItemLabel = styled.span`
	margin-left: 5px;
	font-size: 14px;
	font-weight: 500;
	white-space: nowrap;
	color: transparent;
	transition: 0.3s;
`

export const MenuList = styled.ul`
	width: 100%;
	padding: 10px 0;

	& > ${MenuListItem}:first-of-type {
		${MenuItemLabel} {
			font-family: var(--font-lato);
			font-weight: 900;
			font-size: 16px;
			line-height: 19px;
		}
	}
`

export const MenuItemIcon = styled.span`
	padding: 5px 10px;
`

const openedSidebarStyles = css`
	width: 229px;
	background: rgba(31, 34, 37, 0.8);
	backdrop-filter: blur(10px);

	${MenuItemLabel} {
		color: #fff;
	}
`

export const Sidebar = styled.aside<SidebarProps>`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-shrink: 0;
	width: 62px;
	min-height: 100vh;
	overflow: hidden;
	transition: 0.3s ease-out;
	z-index: 100;

	&:hover {
		width: 229px;
		background: rgba(31, 34, 37, 0.8);
		backdrop-filter: blur(10px);

		${MenuItemLabel} {
			color: #fff;
		}
	}

	${({ open }) => open && openedSidebarStyles}
`

export const MenuSubList = styled.ul`
	${MenuListItem} {
		padding: 0;

		&:last-child {
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
		}
	}
`

export const ButtonExpand = styled.button`
	display: flex;
	align-items: center;
	width: 100%;
	border-radius: 5px;
	transition: 0.3s;

	& > span {
		display: flex;
		align-items: center;
	}

	& > svg {
		margin-left: 5px;
		transition: 0.3s;
	}
`

export const MenuSub = styled.div<MenuSubProps>`
	margin: 0 10px;
	transition: 0.3s;

	&:not(:last-child) {
		margin-bottom: 5px;
	}

	${({ expanded }) =>
		expanded &&
		css`
			background: rgba(66, 72, 79, 0.3);
			border-radius: 5px;

			${ButtonExpand} > svg {
				transform: rotate(-180deg);
			}
		`}
`

export const Accordion = styled(MuiAccordion)`
	width: 100%;

	&::before {
		display: none;
	}
`

export const AccordionSummary = styled(MuiAccordionSummary)`
	min-height: auto;
	padding: 0;
`

export const AccordionDetails = styled(MuiAccordionDetails)`
	padding: 0;
	margin-top: 5px;
`
