import Link from 'next/link'

import * as S from './MenuNav.styled'

interface NavItem {
	name: string
	href: string
}

interface MenuNavProps {
	nav: NavItem[]
}

export const MenuNav = ({ nav }: MenuNavProps) => {
	return (
		<S.MenuNav>
			{nav.map(({ name, href }) => {
				return (
					<Link key={name} href={href}>
						{name}
					</Link>
				)
			})}
		</S.MenuNav>
	)
}
