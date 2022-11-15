import Image from 'next/image'

import { UserBalance, UserProfile } from 'components'
import { SearchField, MenuButton } from 'ui'

import * as S from './Header.styled'

import avatarImg from 'public/img/avatar.png'

import PowerIcon from 'public/icons/power-rounded.svg'
import ArrorDownIcon from 'public/icons/arrow-down.svg'
import PlusIcon from 'public/icons/plus.svg'

export const Header = () => {
	const tabs = ['История аренды', 'Штрафы', 'Транзакции', 'Реквизиты']

	const tabItems = tabs.map((name) => {
		return (
			<S.TabItem key={name}>
				<button>{name}</button>
			</S.TabItem>
		)
	})

	return (
		<S.Header>
			<S.Top>
				<SearchField name="search" placeholder="Введите запрос поиска" />

				<S.Clock>
					<PowerIcon />

					<span>02:47</span>
				</S.Clock>

				<UserProfile />
			</S.Top>

			<S.Bottom>
				<S.BottomLeft>
					<MenuButton color="blue">Хабибаржалаев Н.Д.</MenuButton>

					<S.Divider />

					<UserBalance />
				</S.BottomLeft>
			</S.Bottom>
		</S.Header>
	)
}
