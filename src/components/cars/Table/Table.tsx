import { createColumnHelper, getCoreRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { useMemo, useState } from 'react'

import { ColoredDotText, NotificationsNumber } from 'components/common'
import { Table } from 'ui'
import { Filters } from './Filters'

import { Car, CarStatus } from 'types/car'

import * as S from './Table.styled'

export const CarsTable = () => {
	const cars: Car[] = [
		{
			status: 'working',
			brand: 'Hyundai',
			notifications: 200,
			model: 'Sonata',
			year: '0000',
			licensePlate: 'В183СР 114',
			ctc: '9931731343',
			vin: '78564639284737264',
			mileage: '10 000',
			kpp: 'АКПП',
			owner: 'Назаренко Иван Иванович',
			color: 'Белый'
		},
		{
			status: 'awaits',
			brand: 'Hyundai',
			notifications: 2,
			model: 'Sonata',
			year: '0000',
			licensePlate: 'В183СР 114',
			ctc: '9931731343',
			vin: '78564639284737264',
			mileage: '10 000',
			kpp: 'АКПП',
			owner: 'Назаренко Иван Иванович',
			color: 'Белый'
		},
		{
			status: 'repairs',
			brand: 'Hyundai',
			notifications: 12,
			model: 'Sonata',
			year: '0000',
			licensePlate: 'В183СР 114',
			ctc: '9931731343',
			vin: '78564639284737264',
			mileage: '10 000',
			kpp: 'АКПП',
			owner: 'Назаренко Иван Иванович',
			color: 'Белый'
		},
		{
			status: 'accident',
			brand: 'Hyundai',
			notifications: 1433,
			model: 'Sonata',
			year: '0000',
			licensePlate: 'В183СР 114',
			ctc: '9931731343',
			vin: '78564639284737264',
			mileage: '10 000',
			kpp: 'АКПП',
			owner: 'Назаренко Иван Иванович',
			color: 'Белый'
		}
	]

	const [sorting, setSorting] = useState<SortingState>([])

	const columnHelper = createColumnHelper<Car>()

	const renderCarStatus = (status: CarStatus) => {
		switch (status) {
			case 'working':
				return <ColoredDotText color="green">Работает</ColoredDotText>
			case 'awaits':
				return <ColoredDotText color="yellow">Ожидает</ColoredDotText>
			case 'repairs':
				return <ColoredDotText color="orange">На ремонте</ColoredDotText>
			case 'accident':
				return <ColoredDotText color="red">ДТП</ColoredDotText>
		}
	}

	const columns = [
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => renderCarStatus(getValue())
		}),
		columnHelper.accessor('brand', {
			header: 'Марка',
			cell: ({ getValue, row }) => {
				return (
					<S.Row>
						{getValue()} <NotificationsNumber value={row.original.notifications} />
					</S.Row>
				)
			}
		}),
		columnHelper.accessor('model', {
			header: 'Модель'
		}),
		columnHelper.accessor('year', {
			header: 'Год'
		}),
		columnHelper.accessor('licensePlate', {
			header: 'Госномер'
		}),
		columnHelper.accessor('ctc', {
			header: 'СТС'
		}),
		columnHelper.accessor('vin', {
			header: 'VIN'
		}),
		columnHelper.accessor('mileage', {
			header: 'Пробег'
		}),
		columnHelper.accessor('kpp', {
			header: 'КПП'
		}),
		columnHelper.accessor('owner', {
			header: 'Собственник'
		}),
		columnHelper.accessor('color', {
			header: 'Цвет'
		})
	]

	const table = useReactTable({
		data: cars,
		columns,
		state: {
			sorting
		},
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		enableSorting: true
	})

	return (
		<S.CarsTable>
			<Filters />

			{useMemo(
				() => (
					<Table table={table} />
				),
				[table]
			)}
		</S.CarsTable>
	)
}
