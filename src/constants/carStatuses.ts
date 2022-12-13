import { CarStatus } from 'types/car'

export interface CarStatusItem {
	label: string
	value: CarStatus
}

export const CAR_STATUSES: CarStatusItem[] = [
	{ label: 'Работает', value: 'working' },
	{ label: 'Ожидает', value: 'awaits' },
	{ label: 'На ремонте', value: 'repairs' },
	{ label: 'ДТП', value: 'accident' }
]
