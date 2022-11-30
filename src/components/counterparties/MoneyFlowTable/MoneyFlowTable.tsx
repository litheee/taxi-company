import { useMemo, useState } from 'react'
import { createColumnHelper, getCoreRowModel, SortingState, useReactTable } from '@tanstack/react-table'

import { ColoredDotText, MoneyFlowTableHead } from 'components/common'
import { Checkbox, Table } from 'ui'

import * as S from './MoneyFlowTable.styled'

import TrashIcon from 'public/icons/trash-2.svg'
import EditIcon from 'public/icons/edit.svg'

type TransactionStatus = 'paid' | 'waiting' | 'not-paid' | 'partial-paid'

interface CounterpartyMoneyFlowItem {
	id: number
	date: string
	category: string
	counterparty: string
	sum: number
	status: TransactionStatus
	actions: null
}

interface CounterpartiesMoneyFlowTableProps {
	variant: 'income' | 'outcome'
}

export const CounterpartiesMoneyFlowTable = ({ variant }: CounterpartiesMoneyFlowTableProps) => {
	const today = new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit' })

	const counterparties: CounterpartyMoneyFlowItem[] = [
		{
			id: 0,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'paid',
			actions: null
		},
		{
			id: 1,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'waiting',
			actions: null
		},
		{
			id: 2,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'not-paid',
			actions: null
		},
		{
			id: 3,
			date: today,
			category: 'Шиномонтаж',
			counterparty: 'ИП КУТЕПОВ ВИТАЛИЙ ВИКТОРОВИЧ',
			sum: 5000,
			status: 'partial-paid',
			actions: null
		}
	]

	const [sorting, setSorting] = useState<SortingState>([])

	const columnHelper = createColumnHelper<CounterpartyMoneyFlowItem>()

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

	const columns = [
		columnHelper.accessor('date', {
			header: 'Дата'
		}),
		columnHelper.accessor('category', {
			header: 'Категория'
		}),
		columnHelper.accessor('counterparty', {
			header: 'Контрагент'
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
			header: () => <Checkbox />,
			cell: () => (
				<S.TableActions>
					<button>
						<TrashIcon />
					</button>

					<button>
						<EditIcon />
					</button>

					<button>
						<Checkbox />
					</button>
				</S.TableActions>
			)
		})
	]

	const table = useReactTable({
		data: counterparties,
		columns,
		state: {
			sorting
		},
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		enableSorting: true
	})

	return (
		<S.CounterpartiesMoneyFlowTable>
			<MoneyFlowTableHead variant={variant} />

			{useMemo(
				() => (
					<Table table={table} />
				),
				[table]
			)}
		</S.CounterpartiesMoneyFlowTable>
	)
}
