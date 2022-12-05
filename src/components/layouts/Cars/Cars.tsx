import { useRouter } from 'next/router'
import { MouseEvent, ReactNode, useState } from 'react'

import { MenuButton, MenuNav } from 'components/common'
import { CarCardData } from 'components/cars'

import { ROUTE_NAMES } from 'core/routes'

import * as S from './Cars.styled'

export const CarsLayout = ({ children }: { children?: ReactNode }) => {
	const { query } = useRouter()
	const carId = query.id as string

	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

	const openMenu = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setMenuAnchorEl(currentTarget)
	}

	const closeMenu = () => {
		setMenuAnchorEl(null)
	}

	const getPathnameWithCarId = (path: string, id: string) => {
		return path.replace('[id]', id)
	}

	const nav = [
		{ name: 'Автомобили', href: ROUTE_NAMES.CARS },
		{
			name: 'Приход/Расход',
			href: getPathnameWithCarId(ROUTE_NAMES.CARS_INCOME_EXPENSE, carId)
		},
		{
			name: 'Штрафы',
			href: getPathnameWithCarId(ROUTE_NAMES.CARS_PENALTIES, carId)
		}
	]

	return (
		<S.CarsLayout>
			<S.TopLine>
				<S.TopLineLeft>
					<MenuButton
						color="blue"
						open={Boolean(menuAnchorEl)}
						onClick={openMenu}
					>
						Hyundai Sonata A001AA
					</MenuButton>

					<S.Popover
						open={Boolean(menuAnchorEl)}
						anchorEl={menuAnchorEl}
						onClose={closeMenu}
					>
						<CarCardData />
					</S.Popover>

					<S.Divider />
				</S.TopLineLeft>

				<MenuNav nav={nav} />
			</S.TopLine>

			<S.Content>{children}</S.Content>
		</S.CarsLayout>
	)
}
