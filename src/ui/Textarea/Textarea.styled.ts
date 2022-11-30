import styled from '@emotion/styled'
import MuiTextarea from '@mui/material/TextareaAutosize'

export const TextareaContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const Textarea = styled(MuiTextarea)`
	width: 100%;
	min-height: 64px;
	height: auto !important;
	padding: 8px 10px;
	border-radius: 5px;
	box-shadow: var(--box-shadow);
	background: var(--color-gray-200);
	font-family: var(--font-ubuntu);
	font-weight: 400;
	color: #fff;
	font-size: 14px;
	box-sizing: border-box;
	border: none;
	resize: none;
	outline: none;

	&::placeholder {
		color: var(--color-gray-100);
		transition: 0.3s;
	}

	&:hover {
		&::placeholder {
			color: #fff;
		}
	}
`
