import Link from 'next/link'

import { Clock, UserBalance, UserProfile, EmployeeFilter, UserData } from 'components'
import { TextField } from 'ui'

import * as S from './Header.styled'

import LoupeIcon from 'public/icons/loupe.svg'

export const Header = () => {
	const links = [
		{ label: 'История аренды', href: '/' },
		{ label: 'Штрафы', href: '/' },
		{ label: 'Транзакции', href: '/' },
		{ label: 'Реквизиты', href: '/' }
	]

	const linkItems = links.map(({ label, href }) => {
		return (
			<Link key={label} href={href}>
				{label}
			</Link>
		)
	})

	return (
		<S.Header>
			<S.Top>
				<TextField
					name="search"
					placeholder="Введите запрос поиск"
					InputProps={{
						endAdornment: <LoupeIcon />
					}}
				/>

				<Clock />

				<UserProfile />
			</S.Top>

			<S.Bottom>
				<S.BottomLeft>
					<UserData />

					<S.Divider />

					<UserBalance />

					<S.Divider />

					<EmployeeFilter />
				</S.BottomLeft>

				<S.ButtonGroup>{linkItems}</S.ButtonGroup>
			</S.Bottom>
		</S.Header>
	)
}
