import styled from '@emotion/styled'

import { ButtonGradient } from 'styled/components'

interface MenuButtonProps {
	color: 'blue' | 'green'
}

export const MenuButton = styled(ButtonGradient, {
	shouldForwardProp(propName) {
		return propName !== 'color'
	}
})<MenuButtonProps>`
	display: flex;
	padding: 7px 10px;
	border-radius: 5px;
	font-weight: 500;
	font-size: 15px;

	& > svg {
		margin-left: 5px;
	}

	span {
		display: flex;
		align-items: center;
	}
`
