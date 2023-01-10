import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Select } from 'ui'

import { Placeholder } from 'ui/Select/Select.styled'

interface FilterSelectProps {}

export { Placeholder }

export const FilterSelect = styled(Select)<FilterSelectProps>`
	position: relative;
	padding: 0;

	&&& {
		.MuiSelect-select {
			padding-right: 33px;
		}
	}

	&& {
		.MuiSelect-select {
			background: #000;
		}
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

	.MuiPaper-root {
		z-index: 1600;
		margin-top: 0;
		border-radius: 0 0 5px 5px;
		box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
		background: var(--color-gray-200);
	}

	.MuiSelect-icon {
		z-index: 10;
		stroke: #fff;
	}

	.MuiSelect-select {
		position: relative;
		display: flex;
		align-items: center;
		border-radius: 5px;
		background: #000;
		font-size: 15px;
		font-weight: 500;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			padding: 2px;
			background: var(--gradient-blue);
			border-radius: inherit;
			mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
			transition: 0.3s;
		}
	}

	${Placeholder} {
		margin-right: 5px;
		font-size: 15px;
		font-weight: 500;
	}

	${({ open }) =>
		open &&
		css`
			.MuiSelect-select {
				&::before {
					border-radius: 5px 5px 0 0;
				}
			}
		`}
`
