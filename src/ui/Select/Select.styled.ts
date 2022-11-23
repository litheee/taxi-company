import styled from '@emotion/styled'
import MuiSelect from '@mui/material/Select'

import { Form } from 'styled/components'

export { Form }

export const SelectRow = styled.div`
	position: relative;
	width: 100%;
`

export const Select = styled(MuiSelect)`
	.MuiSelect-icon path,
	.MuiInputBase-input {
		transition: 0.3s;
	}
`

export const Placeholder = styled.span`
	font-weight: 400;
	font-size: 14px;
	color: var(--color-gray-100);
	white-space: normal;
	text-overflow: initial;
	overflow: visible;
	z-index: 1;
	transition: 0.3s;

	& + div {
		margin-top: 0;
	}
`
