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
	z-index: 1;
	background: linear-gradient(252.44deg, #353b41 0%, #191a1c 100%);

	&::before {
		content: '';
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: url('/img/logo-lines-bg.svg');
		background-size: cover;
		will-change: transform;
		z-index: -1;
	}
`

export const Logo = styled.div`
	filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.25));
`

export const Form = styled.form`
	max-width: 434px;
	width: calc(100% - 30px);
	padding: 30px 60px;
	margin-top: 243px;
	background: linear-gradient(62.41deg, #1e2124 0%, #2b3034 100%);
	box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	box-sizing: border-box;

	${Heading} {
		justify-content: center;
		font-size: 32px;
		font-weight: 700;
		line-height: 37px;
	}

	${TextField}, ${TextField} input, ${Heading} {
		text-align: center;
	}

	${TextField} {
		margin-top: 30px;

		label {
			margin-bottom: 15px;
		}

		input {
			&::placeholder {
				color: #585d62;
			}

			&:hover::placeholder,
			&:focus::placeholder {
				color: #fff;
			}
		}
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

	@media (max-width: 500px) {
		margin-top: 100px;
		padding: 20px 30px;

		${Heading} {
			font-size: 24px;
			line-height: 28px;
		}

		${Divider} {
			margin-top: 10px;
		}

		${TextField} {
			margin-top: 15px;
		}

		${Button} {
			margin-top: 30px;
		}
	}
`
