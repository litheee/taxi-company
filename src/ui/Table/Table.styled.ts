import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface TableCellProps {
	sortable?: boolean
}

export const TableContainer = styled.div`
	position: relative;
	width: 100%;
	padding-top: 21px;
	background: var(--color-gray-300);

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: var(--color-gray-200);
		border-radius: 1px;
	}
`

export const Table = styled.table`
	width: 100%;
`

export const TableCell = styled.td<TableCellProps>`
	${({ sortable }) =>
		sortable &&
		css`
			span {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		`}
`

export const TableRow = styled.tr``

export const TableHead = styled.thead`
	background: #737d89;

	${TableRow} {
		padding: 0 11px;
	}

	${TableCell} {
		position: relative;
		padding: 8px 9px;

		&:first-of-type {
			padding-left: 20px;
		}

		&:not(:last-child)::after {
			content: '';
			position: absolute;
			top: 8px;
			right: 0;
			width: 2px;
			height: 17px;
			background: #5d6672;
			opacity: 0.5;
			border-radius: 1px;
		}
	}
`

export const TableBody = styled.tbody`
	${TableRow} {
		&:nth-of-type(odd) {
			background: var(--color-gray-300);
		}

		&:nth-of-type(even) {
			background: var(--color-gray-200);
		}
	}

	${TableCell} {
		padding: 12px 9px;

		&:first-of-type {
			padding-left: 20px;
		}
	}
`

export const SortButton = styled.button`
	margin-left: 10px;
`

export const Pagination = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 14px 0 15px;
	margin-top: 100px;
	gap: 5px;
	box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: var(--color-gray-200);
		border-radius: 1px;
	}
`

export const PaginationButton = styled.button`
	opacity: 0.2;
`

export const FirstPageButton = styled(PaginationButton)`
	transform: rotate(180deg);
`

export const PrevButton = styled(PaginationButton)`
	transform: rotate(90deg);
`

export const NextButton = styled(PaginationButton)`
	transform: rotate(-90deg);
`

export const LastPageButton = styled(PaginationButton)``

export const Pages = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`

export const CurrentPage = styled.div`
	padding: 2px 6px;
	background: var(--color-gray-200);
	border-radius: 2px;
`

export const PagesNumber = styled.div`
	color: var(--color-gray-100);
`
