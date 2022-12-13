import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface SidebarProps {
	open: boolean
}

export const MenuListItem = styled.li`
	padding: 2px 10px;
	transition: 0.3s;

	&:not(:last-child) {
		margin-bottom: 11px;
	}

	&:last-of-type {
		margin-top: auto;
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
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px 0 25px;

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
	position: relative;
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
	position: fixed;
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

export const MessagesNumber = styled.span`
	position: absolute;
	left: 50%;
	top: -20px;
	padding: 2px 6px;
	border-radius: 10px;
	background: linear-gradient(45deg, #2f98cf 14.69%, #2fcfb2 84.93%);
	font-size: 12px;
	line-height: 14px;
	color: #000;
	transform: translateX(-50%);
`
