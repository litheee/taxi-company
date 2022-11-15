import { css } from '@emotion/react'

import { reset } from './reset'
import { variables } from './variables'

export const global = css`
	${reset}
	${variables}

	body {
		font-family: 'Ubuntu', sans-serif;
		font-size: 15px;
		font-weight: 500;
		line-height: 17.24px;
		color: #fff;
		background: #000;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	button {
		display: flex;
		padding: 0;
		border: none;
		background: transparent;
		color: #fff;
		cursor: pointer;
	}

	button,
	input {
		font-family: 'Ubuntu', sans-serif;

		&:focus {
			outline: none;
		}
	}

	svg {
		display: flex;
	}
`
