import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Divider, FieldsRow, FormColumn } from 'styled/components'

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow
} from 'ui/Table/Table.styled'

interface CounterpartyStatusProps {
	color: 'green' | 'red'
}

export { FormColumn, FieldsRow, Divider }

export const CounterpartiesTable = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background: var(--color-gray-300);
	border-radius: 5px 5px 0 0;

	${TableContainer} {
		margin-top: 20px;

		${Table} {
			width: calc(100% - 30px);
			margin: 0 15px;
		}

		${TableBody} {
			${TableRow} {
				cursor: pointer;

				${TableCell}:last-of-type {
					vertical-align: middle;
					padding: 9px 9px 8px;
				}
			}
		}
	}

	${Divider} {
		width: calc(100% - 30px);
		margin: 15px 15px 0;
	}
`

export const TextRed = styled.span`
	color: var(--color-red);
`

export const AggregatorsRow = styled.span`
	display: flex;
	gap: 10px;
`

const getCounterpartyStatusStyles = (color: 'green' | 'red') => {
	switch (color) {
		case 'green':
			return css`
				background-image: linear-gradient(270deg, #88b114 0%, #579d2c 100%);
			`
		case 'red':
			return css`
				color: #ee2929;
			`
	}
}

export const CounterpartyStatus = styled.span<CounterpartyStatusProps>`
	background-clip: text;
	color: transparent;

	${({ color }) => getCounterpartyStatusStyles(color)}
`
