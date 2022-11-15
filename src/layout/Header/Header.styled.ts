import styled from '@emotion/styled'

import { UserProfile } from 'components/UserProfile/UserProfile.styled'

export const Header = styled.header`
	width: 100%;
`

export const Top = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items: center;
	align-items: center;

	${UserProfile} {
		justify-self: flex-end;
	}
`

export const Clock = styled.div`
	display: flex;
	align-items: center;

	span {
		font-size: 45px;
		line-height: 40px;
		margin-left: 15px;
	}
`

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
`

export const BottomLeft = styled.div`
	display: flex;
`

export const Divider = styled.div`
	width: 2px;
	height: 31px;
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
