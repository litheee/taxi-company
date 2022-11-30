import styled from '@emotion/styled'

export const CounterpartiesMoneyFlowPage = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const TablesRow = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	margin-top: 15px;
	gap: 2px;

	&::before {
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 2px;
		height: calc(100% - 6px);
		background: var(--color-gray-400);
		transform: translateX(-50%);
	}
`
