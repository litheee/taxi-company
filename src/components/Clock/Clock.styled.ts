import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Popover as MuiPopover } from 'ui'
import { Button } from 'ui/Button/Button.styled'
import { Checkbox } from 'ui/Checkbox/Checkbox.styled'

interface ClockButtonProps {
	open: boolean
}

export const ClockButton = styled.button<ClockButtonProps>`
	display: flex;
	align-items: center;
	padding: 5px 8px;
	border-radius: 5px;
	transition: 0.3s;

	span {
		font-size: 45px;
		font-weight: 500;
		line-height: 40px;
		margin-left: 15px;
	}

	${({ open }) =>
		open &&
		css`
			background: var(--color-gray-300);
		`}
`

export const Popover = styled(MuiPopover)`
	.MuiPaper-root {
		width: 500px;

		& > ${Button} {
			max-width: 130px;
		}
	}
`

export const Divider = styled.div`
	width: 100%;
	height: 3px;
	margin-top: 15px;
	background: var(--color-gray-200);
	border-radius: 5px;
`

export const TasksListsByDay = styled.ul`
	margin-top: 15px;
`

export const TaskByDay = styled.li`
	&:not(:last-child) {
		margin-bottom: 20px;
	}
`

export const TasksList = styled.ul`
	margin-top: 15px;
`

export const TaskItem = styled.li`
	display: flex;
	align-items: center;
	padding: 8px 10px;
	background: var(--color-gray-200);
	box-shadow: var(--box-shadow);
	border-radius: 5px;

	&:not(:last-child) {
		margin-bottom: 10px;
	}

	p {
		margin-left: 10px;
	}

	${Checkbox} {
		margin-left: auto;

		svg {
			fill: var(--color-gray-100);
		}
	}
`

export const TasksActions = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`
