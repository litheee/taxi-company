import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
	createColumnHelper,
	ExpandedState,
	getCoreRowModel,
	getExpandedRowModel,
	Row,
	SortingState
} from '@tanstack/react-table'

import { IncomeExpenseTableHeading } from '../TableHeading/TableHeading'
import { ColoredDotText } from 'components/common'
import { Checkbox, Table } from 'ui'

import TrashIcon from 'public/icons/trash-2.svg'
import EditIcon from 'public/icons/edit.svg'

type TransactionStatus = 'paid' | 'waiting' | 'not-paid' | 'partial-paid'

interface SubRow {
	id: number
	name: string
	price: number
	amount: number
	total: number
}

interface CounterpartyMoneyFlowItem {
	id: number
	date: string
	category: string
	counterparty: string
	sum: number
	status: TransactionStatus
	actions: null
	subRows: SubRow[]
}

interface IncomeExpenseTableProps {
	variant: 'income' | 'expense'
}

import * as S from './Table.styled'

export const IncomeExpenseTable = ({ variant }: IncomeExpenseTableProps) => {
	const useFormProps = useForm()
	const today = new Date().toLocaleDateString('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit'
	})

	const subRows: SubRow[] = [
		{ id: 1, name: 'Шиномонтаж', price: 5000, amount: 2, total: 10000 },
		{ id: 2, name: 'Что-то ещё', price: 5000, amount: 1, total: 5000 },
		{ id: 3, name: 'Что-то ещё', price: 5000, amount: 1, total: 5000 }
	]

	const counterparties: CounterpartyMoneyFlowItem[] = [
		{
			id: 0,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'paid',
			actions: null,
			subRows
		},
		{
			id: 1,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'waiting',
			actions: null,
			subRows
		},
		{
			id: 2,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'not-paid',
			actions: null,
			subRows
		},
		{
			id: 3,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'partial-paid',
			actions: null,
			subRows
		}
	]

	const [sorting, setSorting] = useState<SortingState>([])
	const [expanded, setExpanded] = useState<ExpandedState>({})

	const renderTransactionStatus = (status: TransactionStatus) => {
		switch (status) {
			case 'paid':
				return <ColoredDotText color="green">Оплачен</ColoredDotText>
			case 'waiting':
				return <ColoredDotText color="yellow">Ожидание</ColoredDotText>
			case 'not-paid':
				return <ColoredDotText color="orange">Не оплачен</ColoredDotText>
			case 'partial-paid':
				return <ColoredDotText color="blue">Част. оплата</ColoredDotText>
		}
	}

	const columnHelper = createColumnHelper<CounterpartyMoneyFlowItem>()
	const columns = [
		columnHelper.accessor('date', {
			header: 'Дата'
		}),
		columnHelper.accessor('category', {
			header: 'Категория'
		}),
		columnHelper.accessor('counterparty', {
			header: 'Контрагент',
			cell: ({ getValue }) => (
				<>
					{getValue()} <S.TextOverflowFadeOut />
				</>
			)
		}),
		columnHelper.accessor('sum', {
			header: 'Сумма',
			cell: ({ getValue }) => getValue().toLocaleString()
		}),
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => renderTransactionStatus(getValue())
		}),
		columnHelper.accessor('actions', {
			header: () => <Checkbox name="" />,
			cell: () => (
				<S.TableActions>
					<button
						onClick={(e) => {
							e.stopPropagation()
						}}
					>
						<TrashIcon />
					</button>

					<button
						onClick={(e) => {
							e.stopPropagation()
						}}
					>
						<EditIcon />
					</button>

					<button
						onClick={(e) => {
							e.stopPropagation()
						}}
					>
						<Checkbox name="" />
					</button>
				</S.TableActions>
			)
		})
	]

	const renderSubTable = ({ row }: { row: Row<CounterpartyMoneyFlowItem> }) => {
		const { subRows } = row.original

		return (
			<>
				<S.SubTableHead>
					<S.TableCell>Номер</S.TableCell>
					<S.TableCell>Название</S.TableCell>
					<S.TableCell>
						<S.SubTableHalfCell>
							<span>Цена</span> <span>Кол-во</span>
						</S.SubTableHalfCell>
					</S.TableCell>
					<S.TableCell colSpan={3}>Стоимость</S.TableCell>
				</S.SubTableHead>

				{subRows.map(({ id, name, price, amount, total }, idx, arr) => {
					return (
						<S.SubTableBody key={id} haveBorder={arr.length - 1 === idx}>
							<S.TableCell>{id}</S.TableCell>
							<S.TableCell>{name}</S.TableCell>
							<S.TableCell>
								<S.SubTableHalfCell>
									<span>{price}</span> <span>{amount}</span>
								</S.SubTableHalfCell>
							</S.TableCell>
							<S.TableCell colSpan={3}>{total}</S.TableCell>
						</S.SubTableBody>
					)
				})}
			</>
		)
	}

	return (
		<S.IncomeExpenseTable>
			<IncomeExpenseTableHeading variant={variant} />

			<FormProvider {...useFormProps}>
				<Table
					options={{
						data: counterparties,
						columns,
						state: {
							sorting,
							expanded
						},
						onExpandedChange: setExpanded,
						onSortingChange: setSorting,
						getCoreRowModel: getCoreRowModel(),
						getExpandedRowModel: getExpandedRowModel(),
						getRowCanExpand: () => true
					}}
					renderSubComponent={renderSubTable}
				/>
			</FormProvider>
		</S.IncomeExpenseTable>
	)
}
