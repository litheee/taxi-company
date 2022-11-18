import styled from '@emotion/styled'

export const FormSection = styled.div`
	width: 100%;
`

export const Label = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 5px;
`

export const Divider = styled.div`
	width: 100%;
	height: 3px;
	margin-bottom: 15px;
	background: var(--color-gray-200);
	box-shadow: var(--box-shadow);
	border-radius: 5px;
`

export const Content = styled.div`
	width: 100%;

	& > *:not(:last-child) {
		margin-bottom: 15px;
	}
`
