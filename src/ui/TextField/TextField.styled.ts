import styled from '@emotion/styled'
import MuiTextField from '@mui/material/TextField'

export const TextField = styled(MuiTextField)`
	input[type='number'] {
		-moz-appearance: textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&&& {
		.MuiInputBase-input.MuiInput-input::placeholder {
			opacity: 1 !important;
		}
	}
`
