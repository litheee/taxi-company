import styled from '@emotion/styled'

import { Divider } from 'styled/components'

import { Heading } from 'common/Heading/Heading.styled'
import { Button } from 'ui/Button/Button.styled'
import { TextField } from 'ui/TextField/TextField.styled'

export { Divider }

export const SignInPage = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	background: linear-gradient(252.44deg, #353b41 0%, #191a1c 100%);
`

export const Logo = styled.div`
	filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.25));
`

export const Form = styled.form`
	padding: 30px 60px;
	margin-top: 243px;
	background: linear-gradient(62.41deg, #1e2124 0%, #2b3034 100%);
	box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.25);
	border-radius: 5px;

	${Heading} {
		font-size: 32px;
		font-weight: 700;
		line-height: 37px;
	}

	${TextField}, ${TextField} input, ${Heading} {
		text-align: center;
	}

	${Heading} {
		justify-content: center;
	}

	${TextField} {
		margin-top: 30px;
	}

	${Divider} {
		margin-top: 18px;
		height: 2px;
		background: #2e353b;
		border-radius: 1px;
	}

	${Button} {
		margin-top: 62px;
		box-shadow: var(--box-shadow);
	}
`
