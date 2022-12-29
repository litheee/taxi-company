import { MouseEvent, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { MenuItem } from 'ui'
import { SearchField } from 'components/common'

import * as S from './EmployeeFilter.styled'

import PlusIcon from 'public/icons/plus.svg'
import CrossIcon from 'public/icons/cross.svg'
import ArrowDownIcon from 'public/icons/arrow-down.svg'

export const EmployeeFilter = () => {
	const useFormProps = useForm()
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

	const roles = [
		{
			name: 'supplier',
			label: 'Поставщик',
			roles: [
				{ name: 'supplier1', label: 'Поставщик #1' },
				{ name: 'supplier2', label: 'Поставщик #2' }
			]
		},
		{
			name: 'employee',
			label: 'Сотрудник',
			roles: [
				{ name: 'mechanic', label: 'Механик' },
				{ name: 'chiefAccountant', label: 'Главный бухгалтер' },
				{ name: 'employee1', label: 'Сотрудник №...' },
				{ name: 'employee2', label: 'Сотрудник №...' },
				{ name: 'employee3', label: 'Сотрудник №...' },
				{ name: 'employee4', label: 'Сотрудник №...' },
				{ name: 'employee5', label: 'Сотрудник №...' },
				{ name: 'employee6', label: 'Сотрудник №...' },
				{ name: 'employee7', label: 'Сотрудник №...' },
				{ name: 'employee8', label: 'Сотрудник №...' }
			]
		}
	]

	const openMenu = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setMenuAnchorEl(currentTarget)
	}

	const closeMenu = () => {
		setMenuAnchorEl(null)
	}

	return (
		<S.EmployeeFilter>
			<S.MenuButton open={Boolean(menuAnchorEl)} onClick={openMenu}>
				<span>
					<PlusIcon />
					<span>
						<ArrowDownIcon />
					</span>
				</span>
			</S.MenuButton>

			<S.RolesMenu
				open={Boolean(menuAnchorEl)}
				anchorEl={menuAnchorEl}
				onClose={closeMenu}
			>
				<FormProvider {...useFormProps}>
					<SearchField name="search" placeholder="Поиск" />
				</FormProvider>

				<S.RolesMenuList>
					{roles.map(({ name, label, roles }) => {
						return (
							<S.RolesListContainer key={name}>
								<span>{label}</span>

								<S.RolesList>
									{roles.map(({ name, label }) => (
										<MenuItem key={name} onClick={closeMenu}>
											{label}
										</MenuItem>
									))}
								</S.RolesList>
							</S.RolesListContainer>
						)
					})}
				</S.RolesMenuList>
			</S.RolesMenu>
		</S.EmployeeFilter>
	)
}
