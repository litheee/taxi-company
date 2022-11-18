import { FC, MouseEventHandler, PropsWithChildren } from 'react'

import * as S from './MenuButton.styled'

import ArrowDownIcon from 'public/icons/arrow-down.svg'

interface MenuButtonProps {
	open: boolean
	color?: 'blue' | 'green'
	onClick?: MouseEventHandler<{}>
}

export const MenuButton: FC<PropsWithChildren<MenuButtonProps>> = ({ children, open, color, onClick }) => (
	<S.MenuButton open={open} color={color} onClick={onClick}>
		{children}

		<ArrowDownIcon />
	</S.MenuButton>
)
