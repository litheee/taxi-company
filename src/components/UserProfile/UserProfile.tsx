import { MouseEvent, useState } from 'react'
import Image from 'next/image'

import { Button, Checkbox, MenuButton } from 'ui'

import * as S from './UserProfile.styled'

import avatarImg from 'public/img/avatar.png'

export const UserProfile = () => {
	const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLButtonElement | null>(null)
	const isPopoverOpen = Boolean(popoverAnchorEl)

	const notifications = [
		{ id: 0, label: 'Выбрать все', time: '13:06' },
		{ id: 1, label: 'Уведомление 1 не прочитано', time: '13:06' },
		{ id: 2, label: 'Уведомление 1 не прочитано', time: '13:06' },
		{ id: 3, label: 'Уведомление 1 не прочитано', time: '13:06' },
		{ id: 4, label: 'Уведомление 1 не прочитано', time: '13:06' },
		{ id: 5, label: 'Уведомление 1 не прочитано', time: '13:06' }
	]

	const openPopover = (event: MouseEvent<HTMLButtonElement>) => {
		setPopoverAnchorEl(event.currentTarget)
	}

	const closePopover = () => {
		setPopoverAnchorEl(null)
	}

	const notificationItems = notifications.map(({ id, label, time }) => {
		return (
			<S.NotificationItem key={id}>
				<Checkbox />

				<p>{label}</p>

				<S.NotificationTime>{time}</S.NotificationTime>
			</S.NotificationItem>
		)
	})

	return (
		<S.UserProfile popoverOpen={isPopoverOpen}>
			<MenuButton open={isPopoverOpen} onClick={openPopover}>
				<S.Avatar>
					<Image src={avatarImg} alt="Пользователь" />
					<S.NotificationsCount>5</S.NotificationsCount>
				</S.Avatar>

				<span>Хабибаржалаев Нурмагомед</span>
			</MenuButton>

			<S.Popover
				open={isPopoverOpen}
				anchorEl={popoverAnchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				onClose={closePopover}
			>
				<S.ActionsRow>
					<Button fullWidth>В профиль</Button>
					<Button fullWidth>Выйти</Button>
				</S.ActionsRow>

				<S.Notifications>
					<p>Уведомления</p>

					<S.NotificationList>{notificationItems}</S.NotificationList>
				</S.Notifications>

				<S.Divider />

				<S.ActionsRow>
					<Button fullWidth>Удалить</Button>
					<Button fullWidth color="blue">
						Прочитано
					</Button>
				</S.ActionsRow>
			</S.Popover>
		</S.UserProfile>
	)
}
