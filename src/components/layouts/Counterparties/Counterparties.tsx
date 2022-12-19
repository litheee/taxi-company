import { useRouter } from 'next/router'
import { MouseEvent, useState } from 'react'

import { UserBalance, EmployeeFilter } from 'components'
import { MenuButton, MenuNav } from 'components/common'
import { CounterpartyDataForm } from 'components/counterparties'

import { useCounterparties } from 'hooks'
import { ROUTE_NAMES } from 'constants/routes'

import * as S from './Counterparties.styled'

export const CounterpartiesLayout = ({ children }: { children?: React.ReactNode }) => {
	const { query } = useRouter()
	const counterpartyId = query.id as string
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

	const counterparties = useCounterparties()

	const openMenu = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		counterparties.subscribe()
		setMenuAnchorEl(currentTarget)
	}

	const closeMenu = () => {
		setMenuAnchorEl(null)
		counterparties.unsubscribe()
	}

	const getPathnameWithCounterpartyId = (path: string, id: string) => {
		return path.replace('[id]', id)
	}

	const nav = [
		{ name: 'Контрагенты', href: ROUTE_NAMES.COUNTERPARTIES },
		{
			name: 'Приход/Расход',
			href: getPathnameWithCounterpartyId(
				ROUTE_NAMES.COUNTERPARTIES_INCOME_EXPENSE,
				counterpartyId
			)
		},
		{
			name: 'История аренды',
			href: getPathnameWithCounterpartyId(
				ROUTE_NAMES.COUNTERPARTIES_RENT_HISTORY,
				counterpartyId
			)
		},
		{
			name: 'Реквизиты',
			href: getPathnameWithCounterpartyId(
				ROUTE_NAMES.COUNTERPARTIES_REQUISITES,
				counterpartyId
			)
		},
		{
			name: 'Штрафы',
			href: getPathnameWithCounterpartyId(
				ROUTE_NAMES.COUNTERPARTIES_PENALTIES,
				counterpartyId
			)
		},
		{
			name: 'Списания',
			href: getPathnameWithCounterpartyId(
				ROUTE_NAMES.COUNTERPARTIES_CHARGES,
				counterpartyId
			)
		},
		{
			name: 'Автомобили',
			href: getPathnameWithCounterpartyId(ROUTE_NAMES.COUNTERPARTIES_CARS, counterpartyId)
		}
	]

	return (
		<S.CounterpartiesLayout>
			<S.TopLine>
				<S.TopLineLeft>
					<MenuButton color="blue" open={Boolean(menuAnchorEl)} onClick={openMenu}>
						Хабибаржалаев Н.Д.
					</MenuButton>

					<S.Popover
						open={Boolean(menuAnchorEl)}
						anchorEl={menuAnchorEl}
						onClose={closeMenu}
					>
						<CounterpartyDataForm />
					</S.Popover>

					<S.Divider $orientation="vertical" />

					<UserBalance />

					<S.Divider $orientation="vertical" />

					<EmployeeFilter />
				</S.TopLineLeft>

				<MenuNav nav={nav} />
			</S.TopLine>

			<S.Content>{children}</S.Content>
		</S.CounterpartiesLayout>
	)
}
