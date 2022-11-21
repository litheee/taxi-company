import { createColumnHelper, getCoreRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { useMemo, useState } from 'react'

import { DriverStatus } from 'components'
import { Table } from 'ui'
import { Filters } from './Filters'

import { Driver } from 'types/driver'

import * as S from './DriversTable.styled'

export const DriversTable = () => {
	const drivers: Driver[] = [
		{
			owner: 'Назаренко Иван Иванович',
			role: 'Собственник',
			status: 'blocked',
			car: 'Huyndai Sonata MB1342CP',
			workConditions: '50/50',
			phone: '0-800-753-00-33',
			driveLicense: '1237654',
			balance: '2 400',
			deposit: '2 400',
			aggregators: 'Ситимобил'
		},
		{
			owner: 'Назаренко Иван Иванович',
			role: 'Собственник',
			status: 'active',
			car: 'KIA K5 ВМ1597СР',
			workConditions: '70/30',
			phone: '0-800-753-00-33',
			driveLicense: '1237654',
			balance: '- 2 400',
			deposit: '2 400',
			aggregators: 'Ситимобил'
		}
	]

	const [sorting, setSorting] = useState<SortingState>([])

	const columnHelper = createColumnHelper<Driver>()

	const columns = [
		columnHelper.accessor('owner', {
			header: 'Собственник'
		}),
		columnHelper.accessor('role', {
			header: 'Роль'
		}),
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => <DriverStatus status={getValue()} />
		}),
		columnHelper.accessor('car', {
			header: 'Автомобиль'
		}),
		columnHelper.accessor('workConditions', {
			header: 'Условия работы'
		}),
		columnHelper.accessor('phone', {
			header: 'Телефон'
		}),
		columnHelper.accessor('driveLicense', {
			header: 'Водит. удостоверение'
		}),
		columnHelper.accessor('balance', {
			header: 'Баланс',
			cell: ({ getValue }) => (getValue().charAt(0) === '-' ? <S.TextRed>{getValue()}</S.TextRed> : getValue())
		}),
		columnHelper.accessor('deposit', {
			header: 'Депозит'
		}),
		columnHelper.accessor('aggregators', {
			header: 'Агрегаторы'
		})
	]

	const table = useReactTable({
		data: drivers,
		columns,
		state: {
			sorting
		},
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		enableSorting: true
	})

	return (
		<S.DriversTable>
			<Filters />

			{useMemo(
				() => (
					<Table table={table} />
				),
				[table]
			)}
		</S.DriversTable>
	)
}
