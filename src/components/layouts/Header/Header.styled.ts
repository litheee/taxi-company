import styled from '@emotion/styled'

import { UserProfile } from 'components/layouts/UserProfile/UserProfile.styled'
import { TextField } from 'ui/TextField/TextField.styled'

export const Header = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

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
`
