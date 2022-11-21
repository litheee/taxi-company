import { DriverStatus as Status } from 'types/driver'

import * as S from './DriverStatus.styled'

interface DriverStatusProps {
	status: Status
}

export const DriverStatus = ({ status }: DriverStatusProps) => {
	const getDriverStatus = (status: Status) => {
		switch (status) {
			case 'active':
				return <S.DriverStatus color="green">Активен</S.DriverStatus>
			case 'blocked':
				return <S.DriverStatus color="red">Заблокирован</S.DriverStatus>
		}
	}

	return getDriverStatus(status)
}
