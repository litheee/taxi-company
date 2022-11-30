import styled from '@emotion/styled'
import ReactInputMask from 'react-input-mask'

export const InputMask = styled(ReactInputMask)`
	input {
		color: var(--color-gray-100);
		transition: 0.3s;
	}

	&:hover,
	&:focus,
	&:active,
	&:focus-within {
		input {
			color: #fff;
		}
	}
`
