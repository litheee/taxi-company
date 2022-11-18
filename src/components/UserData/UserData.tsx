import { MouseEvent, useState } from 'react'

import { IndividualCardData, CompanyCardData, CarCardData } from 'components'
import { MenuButton } from 'ui'

import * as S from './UserData.styled'

export const UserData = () => {
	const [card, setCard] = useState(0)
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

	const openMenu = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setMenuAnchorEl(currentTarget)
	}

	const closeMenu = () => {
		setMenuAnchorEl(null)
	}

	return (
		<S.UserData>
			<MenuButton open={Boolean(menuAnchorEl)} color="blue" onClick={openMenu}>
				Хабибаржалаев Н.Д.
			</MenuButton>

			<S.Popover open={Boolean(menuAnchorEl)} anchorEl={menuAnchorEl} onClose={closeMenu}>
				<S.Switch>
					<button
						onClick={() => {
							setCard(0)
						}}
					>
						1
					</button>
					<button
						onClick={() => {
							setCard(1)
						}}
					>
						2
					</button>
					<button
						onClick={() => {
							setCard(2)
						}}
					>
						3
					</button>
				</S.Switch>

				{card === 0 ? <IndividualCardData /> : null}
				{card === 1 ? <CompanyCardData /> : null}
				{card === 2 ? <CarCardData /> : null}
			</S.Popover>
		</S.UserData>
	)
}