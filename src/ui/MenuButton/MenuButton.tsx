import { FC, MouseEventHandler, PropsWithChildren } from 'react'

import * as S from './MenuButton.styled'

import ArrowDownIcon from 'public/icons/arrow-down.svg'

interface MenuButtonProps {
	color: 'blue' | 'green'
	onClick?: MouseEventHandler<{}>
}

export const MenuButton: FC<PropsWithChildren<MenuButtonProps>> = ({ children, color, onClick }) => (
	<S.MenuButton color={color} onClick={onClick}>
		{children}

		<ArrowDownIcon />
	</S.MenuButton>
)
