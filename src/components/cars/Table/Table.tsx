import { useState } from 'react'
import {
	createColumnHelper,
	getCoreRowModel,
	Row,
	SortingState
} from '@tanstack/react-table'
import { useRouter } from 'next/router'

import { NotificationsNumber } from 'components/common'
import { Table } from 'ui'
import { Filters } from './components'
import { CarStatus } from '../CarStatus/CarStatus'

import { ROUTE_NAMES } from 'constants/routes'
import { Car } from 'types/car'

import * as S from './Table.styled'

export const CarsTable = () => {
	const router = useRouter()

	const cars: Car[] = [
		{
			id: '1',
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
			id: '2',
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
			id: '3',
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
			id: '4',
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

	const columns = [
		columnHelper.accessor('brand', {
			header: 'Марка',
			cell: ({ getValue, row }) => {
				return (
					<S.Row>
						{getValue()}
						<NotificationsNumber value={row.original.notifications} />
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
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => <CarStatus status={getValue()} />
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

	const toCarPage = ({ original }: Row<Car>) => {
		router.push(ROUTE_NAMES.CAR.replace('[id]', original.id))
	}

	return (
		<S.CarsTable>
			<Filters />

			<S.Divider />

			<Table
				options={{
					data: cars,
					columns,
					state: {
						sorting
					},
					getCoreRowModel: getCoreRowModel(),
					onSortingChange: setSorting
				}}
				onRowClick={toCarPage}
			/>
		</S.CarsTable>
	)
}
