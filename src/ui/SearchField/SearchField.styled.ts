import styled from '@emotion/styled'

export const SearchField = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 40px;
	padding-right: 15px;
	background: var(--color-gray-200);
	border-radius: 5px;
	box-sizing: border-box;
`

export const SearchFieldInput = styled.input`
	width: 100%;
	padding: 0;
	border: none;
	padding: 12px 0 12px 15px;
	font-size: 14px;
	color: #fff;
	background: var(--color-gray-200);
	border-radius: 5px;

	&::placeholder {
		color: #b4b4b4;
	}
`

export const ButtonIcon = styled.button`
	margin-left: 10px;
`
