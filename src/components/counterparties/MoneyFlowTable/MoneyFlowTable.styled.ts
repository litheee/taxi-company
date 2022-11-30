import styled from '@emotion/styled'
import { Table, TableCell, TableContainer, TableHead } from 'ui/Table/Table.styled'

export const CounterpartiesMoneyFlowTable = styled.div`
	width: 100%;

	${TableContainer} {
		padding: 0;

		&::before {
			display: none;
		}
	}

	${Table} {
		width: calc(100% - 30px);
		margin: 0 15px;

		${TableHead} ${TableCell}:last-of-type {
			width: 78px;
			vertical-align: middle;

			& > span {
				justify-content: flex-end;

				span {
					&:hover {
						svg {
							opacity: 1;
						}
					}

					svg {
						opacity: 0.5;
						transition: 0.3s;
					}
				}
			}
		}
	}
`

export const TableActions = styled.span`
	display: flex;
	align-items: center;
	gap: 15px;

	button {
		svg {
			opacity: 0.5;
			transition: 0.3s;
		}

		&:hover {
			svg {
				opacity: 1;
			}
		}
	}
`
