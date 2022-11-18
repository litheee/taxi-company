import { MouseEvent, useState } from 'react'
import Menu from '@mui/material/Menu'

import * as S from './EmployeeFilter.styled'

import PlusIcon from 'public/icons/plus.svg'
import CrossIcon from 'public/icons/cross.svg'
import ArrowDownIcon from 'public/icons/arrow-down.svg'

export const EmployeeFilter = () => {
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

	const employees = ['Директор', 'Управляющий', 'Водитель', 'Диспетчер', 'Механик']

	const openMenu = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setMenuAnchorEl(currentTarget)
	}
	const closeMenu = () => {
		setMenuAnchorEl(null)
	}

	const employeesMenuItems = employees.map((employee) => {
		return (
			<S.MenuItem key={employee} onClick={closeMenu}>
				{employee}
			</S.MenuItem>
		)
	})

	return (
		<S.EmployeeFilter>
			<S.Chip>
				<span>
					Водитель
					<button>
						<CrossIcon />
					</button>
				</span>
			</S.Chip>

			<S.Chip>
				<span>
					Собственник
					<button>
						<CrossIcon />
					</button>
				</span>
			</S.Chip>

			<S.EmployeeAdd>
				<S.EmployeeAddButton>
					<PlusIcon />
				</S.EmployeeAddButton>

				<button>Поставщик</button>

				<S.MenuButton open={Boolean(menuAnchorEl)} onClick={openMenu}>
					Сотрудник
					<span>
						<ArrowDownIcon />
					</span>
				</S.MenuButton>
			</S.EmployeeAdd>

			<Menu open={Boolean(menuAnchorEl)} anchorEl={menuAnchorEl} onClose={closeMenu}>
				{employeesMenuItems}
			</Menu>
		</S.EmployeeFilter>
	)
}
