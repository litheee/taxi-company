import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import {
	createColumnHelper,
	getCoreRowModel,
	Row,
	SortingState
} from '@tanstack/react-table'

import { Table } from 'ui'
import { Filters } from './components'

import { ROUTE_NAMES } from 'constants/routes'

import * as S from './Table.styled'

import YandexIcon from 'public/icons/aggregators/yandex.svg'
import UberIcon from 'public/icons/aggregators/uber.svg'
import CityMobileIcon from 'public/icons/aggregators/city-mobile.svg'

type CounterpartyStatus = 'blocked' | 'active'

interface Counterparty {
	id: string
	owner: string
	role: string
	status: CounterpartyStatus
	car: string
	workConditions: string
	phone: string
	driveLicense: string
	balance: string
	deposit: string
	aggregators: string[]
}

export const CounterpartiesTable = () => {
	const router = useRouter()

	const counterparties: Counterparty[] = [
		{
			id: '1',
			owner: 'Назаренко Иван Иванович',
			role: 'Собственник',
			status: 'blocked',
			car: 'Huyndai Sonata MB1342CP',
			workConditions: '50/50',
			phone: '0-800-753-00-33',
			driveLicense: '1237654',
			balance: '2 400',
			deposit: '2 400',
			aggregators: ['yandex', 'city-mobile', 'uber']
		},
		{
			id: '2',
			owner: 'Назаренко Иван Иванович',
			role: 'Собственник',
			status: 'active',
			car: 'KIA K5 ВМ1597СР',
			workConditions: '70/30',
			phone: '0-800-753-00-33',
			driveLicense: '1237654',
			balance: '- 2 400',
			deposit: '2 400',
			aggregators: ['yandex', 'city-mobile']
		}
	]

	const [sorting, setSorting] = useState<SortingState>([])

	const columnHelper = createColumnHelper<Counterparty>()

	const renderCounterpartyStatus = (status: CounterpartyStatus) => {
		switch (status) {
			case 'active':
				return <S.CounterpartyStatus color="green">Активен</S.CounterpartyStatus>
			case 'blocked':
				return <S.CounterpartyStatus color="red">Заблокирован</S.CounterpartyStatus>
		}
	}

	const getAggregatorsIcon = (name: string) => {
		switch (name) {
			case 'yandex':
				return <YandexIcon />
			case 'city-mobile':
				return <CityMobileIcon />
			case 'uber':
				return <UberIcon />
		}
	}

	const columns = [
		columnHelper.accessor('owner', {
			header: 'Собственник'
		}),
		columnHelper.accessor('role', {
			header: 'Роль'
		}),
		columnHelper.accessor('status', {
			header: 'Статус',
			cell: ({ getValue }) => renderCounterpartyStatus(getValue())
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
			cell: ({ getValue }) =>
				getValue().charAt(0) === '-' ? <S.TextRed>{getValue()}</S.TextRed> : getValue()
		}),
		columnHelper.accessor('deposit', {
			header: 'Депозит'
		}),
		columnHelper.accessor('aggregators', {
			header: 'Агрегаторы',
			cell: ({ getValue }) => {
				return (
					<S.AggregatorsRow>
						{getValue().map((name) => {
							return <Fragment key={name}>{getAggregatorsIcon(name)}</Fragment>
						})}
					</S.AggregatorsRow>
				)
			}
		})
	]

	const toCounterpartyPage = ({ original }: Row<Counterparty>) => {
		router.push(ROUTE_NAMES.COUNTERPARTY.replace('[id]', original.id))
	}

	return (
		<S.CounterpartiesTable>
			<Filters />

			<S.Divider />

			<Table
				options={{
					data: counterparties,
					columns,
					state: {
						sorting
					},
					getCoreRowModel: getCoreRowModel(),
					onSortingChange: setSorting
				}}
				onRowClick={toCounterpartyPage}
			/>
		</S.CounterpartiesTable>
	)
}
