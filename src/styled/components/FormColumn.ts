import styled from '@emotion/styled'

export const FormColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 314px;
	padding: 30px;

	& > *:not(:last-child) {
		margin-bottom: 20px;
	}
`
