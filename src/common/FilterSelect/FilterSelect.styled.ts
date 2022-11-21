import styled from '@emotion/styled'

import { Select } from 'ui'

import { Placeholder } from 'ui/Select/Select.styled'

export { Placeholder }

export const FilterSelect = styled(Select)`
	position: relative;
	padding: 0;
	align-items: stretch;
	background: var(--color-gray-300);
	border: 2px solid transparent;
	background-clip: padding-box;
	z-index: 0;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: -2px;
		border-radius: inherit;
		background: var(--gradient-blue);
		z-index: -1;
	}

	&:hover {
		${Placeholder} {
			color: #fff;
		}

		.MuiSelect-icon path {
			stroke: #fff;
		}

		.MuiInputBase-input {
			color: var(--color-gray-100);
		}
	}

	.MuiInputBase-input {
		display: flex;
		align-items: center;
		border-radius: 5px;
		background: var(--color-gray-300) !important;
	}

	.MuiMenu-paper {
		margin-top: 2px;
	}

	${Placeholder} {
		margin-right: 5px;
	}
`
