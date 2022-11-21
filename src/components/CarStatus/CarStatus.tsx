import { CarStatus as Status } from 'types/car'

import * as S from './CarStatus.styled'

interface CarStatusProps {
	status: Status
}

export const CarStatus = ({ status }: CarStatusProps) => {
	const getCarStatus = (status: Status) => {
		switch (status) {
			case 'working':
				return (
					<S.CarStatus color="green">
						<span>Работает</span>
					</S.CarStatus>
				)
			case 'awaits':
				return (
					<S.CarStatus color="yellow">
						<span>Ожидает</span>
					</S.CarStatus>
				)
			case 'repairs':
				return (
					<S.CarStatus color="orange">
						<span>На ремонте</span>
					</S.CarStatus>
				)
			case 'accident':
				return (
					<S.CarStatus color="red">
						<span>ДТП</span>
					</S.CarStatus>
				)
		}
	}

	return getCarStatus(status)
}
