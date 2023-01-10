import { FC, MouseEventHandler, PropsWithChildren } from 'react'

import * as S from './MenuButton.styled'

import ArrowDownIcon from 'public/icons/arrow-down.svg'

interface MenuButtonProps {
	open: boolean
	arrowPlacement?: 'left' | 'right'
	color?: 'blue' | 'green'
	onClick?: MouseEventHandler<{}>
}

export const MenuButton: FC<PropsWithChildren<MenuButtonProps>> = ({
	children,
	open,
	color,
	arrowPlacement = 'right',
	...props
}) => (
	<S.MenuButton {...props} open={open} color={color}>
		{arrowPlacement === 'left' ? <ArrowDownIcon /> : null}

		{children}

		{arrowPlacement === 'right' ? <ArrowDownIcon /> : null}
	</S.MenuButton>
)
