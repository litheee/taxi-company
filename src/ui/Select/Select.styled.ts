import styled from '@emotion/styled'
import MuiSelect from '@mui/material/Select'

export const SelectRow = styled.div`
	position: relative;
	width: 100%;
`

export const Select = styled(MuiSelect)``

export const Placeholder = styled.span`
	font-weight: 400;
	font-size: 14px;
	color: var(--color-gray-100);
	white-space: normal;
	text-overflow: initial;
	overflow: visible;
	z-index: 1;

	& + div {
		margin-top: 0;
	}
`
