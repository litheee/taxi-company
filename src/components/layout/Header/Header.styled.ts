import styled from '@emotion/styled'
import { ClockButton } from 'components/Clock/Clock.styled'

import { UserProfile } from 'components/UserProfile/UserProfile.styled'

import { ButtonGroup } from 'styled/components'
import { TextField } from 'ui/TextField/TextField.styled'

export { ButtonGroup }

export const Header = styled.header`
	width: 100%;
`

export const Top = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;

	${UserProfile} {
		justify-self: flex-end;
	}

	${TextField} {
		max-width: 600px;

		.MuiInput-root {
			height: 40px;
			padding-right: 15px;

			input {
				padding-left: 15px;
			}
		}
	}

	${ClockButton} {
		margin-left: 186px;
	}
`

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;

	${ButtonGroup} {
		margin-left: auto;
		width: auto;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 500;
			font-size: 15px;
			line-height: 17px;
			padding: 7px 10px;
			transition: 0.3s;

			&:first-of-type {
				border-top-left-radius: 5px;
				border-bottom-left-radius: 5px;
			}

			&:last-of-type {
				border-top-right-radius: 5px;
				border-bottom-right-radius: 5px;
			}

			&:hover {
				background: #599109;
			}

			&:active {
				background: #19560a;
			}
		}
	}
`

export const BottomLeft = styled.div`
	display: flex;
`

export const Divider = styled.div`
	width: 2px;
	height: 100%;
	background: #ffffff;
	opacity: 0.2;
	border-radius: 5px;
	margin: 0 20px;
`

export const JobList = styled.div`
	display: flex;
	grid-gap: 10px;
`

export const AddJob = styled.div`
	display: flex;
	align-items: center;
	border-radius: 5px;
	padding-right: 2px;
	background: linear-gradient(54.93deg, #408104 0%, #337801 100%);

	span {
		display: flex;
		align-items: center;
		height: 27px;
		padding: 0 10px;
		background: #000;

		&:last-child {
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
		}

		svg {
			margin-left: 5px;
		}
	}
`

export const AddJobIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 37px;
	height: 31px;
`

export const Tabs = styled.ul`
	display: flex;
	background: var(--gradient-green);
	border-radius: 5px;
`

export const TabItem = styled.li`
	padding: 7px 10px;

	button {
		font-weight: 500;
		font-size: 15px;
	}
`
