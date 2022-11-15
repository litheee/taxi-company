import { MouseEvent, MouseEventHandler, useState } from 'react'
import Link from 'next/link'

import * as S from './Sidebar.styled'

import HamburgerIcon from 'public/icons/hamburger.svg'
import DocumentCheckmarkIcon from 'public/icons/document-checkmark.svg'
import TeamworkIcon from 'public/icons/teamwork.svg'
import MessagesIcon from 'public/icons/messages.svg'
import CalendarIcon from 'public/icons/calendar.svg'
import DocumentIcon from 'public/icons/document.svg'
import CloudIcon from 'public/icons/cloud.svg'
import MailIcon from 'public/icons/mail.svg'
import GroupIcon from 'public/icons/group.svg'
import ListFilterIcon from 'public/icons/list-filter.svg'
import TrackerIcon from 'public/icons/tracker.svg'
import ShoppingCartIcon from 'public/icons/shopping-cart.svg'
import ContactsIcon from 'public/icons/contacts.svg'
import DroidIcon from 'public/icons/droid.svg'
import WidgetsIcon from 'public/icons/widgets.svg'
import DropdownCircleIcon from 'public/icons/dropdown-circle.svg'
import ArrowDownIcon from 'public/icons/arrow-down.svg'

interface MenuItemWithSub {
	label: string
	icon: any
	subItems: MenuSubItem[]
}

interface MenuSubItem {
	label: string
	icon: any
	href: string
}

interface MenuItem {
	label: string
	icon: any
	href?: string
	subItems?: MenuSubItem[]
}

interface SidebarProps {
	isOpen: boolean
	onSidebarOpen: () => void
}

export const Sidebar = ({ isOpen, onSidebarOpen }: SidebarProps) => {
	const [subMenuExpanded, setSubMenuExpanded] = useState<string | null>(null)

	const toggleSubMenu = (label: string) => {
		setSubMenuExpanded(subMenuExpanded !== label ? label : null)
	}

	const menu: MenuItem[] = [
		{ label: isOpen ? 'Свернуть меню' : 'Развернуть меню', icon: <HamburgerIcon />, href: '/' },
		{ label: 'Финансы', icon: <DocumentCheckmarkIcon />, href: '/' },
		{
			label: 'Совместная работа',
			icon: <TeamworkIcon />,
			subItems: [
				{ label: 'Чат и звонки', icon: <MessagesIcon />, href: '/' },
				{ label: 'Календарь', icon: <CalendarIcon />, href: '/' },
				{ label: 'Документы', icon: <DocumentIcon />, href: '/' },
				{ label: 'Диск', icon: <CloudIcon />, href: '/' },
				{ label: 'Почта', icon: <MailIcon />, href: '/' },
				{ label: 'Группы', icon: <GroupIcon />, href: '/' }
			]
		},
		{ label: 'CRM', icon: <ListFilterIcon />, href: '/' },
		{ label: 'Маркетинг', icon: <TrackerIcon />, href: '/' },
		{ label: 'Магазины', icon: <ShoppingCartIcon />, href: '/' },
		{ label: 'Компания', icon: <ContactsIcon />, href: '/' },
		{ label: 'Автоматизация', icon: <DroidIcon />, href: '/' },
		{
			label: 'Приложения',
			icon: <WidgetsIcon />,
			subItems: [
				{ label: 'Приложение 1', icon: <WidgetsIcon />, href: '/' },
				{ label: 'Приложение 2', icon: <WidgetsIcon />, href: '/' },
				{ label: 'Приложение 3', icon: <WidgetsIcon />, href: '/' }
			]
		},
		{ label: 'Ещё', icon: <DropdownCircleIcon />, href: '/' }
	]

	const renderItemWithSUb = ({ label, icon, subItems }: MenuItemWithSub) => {
		const isExpanded = subMenuExpanded === label

		return (
			<S.MenuSub key={label} expanded={isExpanded}>
				<S.Accordion
					expanded={isExpanded}
					onClick={() => {
						toggleSubMenu(label)
					}}
				>
					<S.AccordionSummary>
						<S.ButtonExpand>
							<span>
								<S.MenuItemIcon>{icon}</S.MenuItemIcon>
								<S.MenuItemLabel>{label}</S.MenuItemLabel>
							</span>

							<ArrowDownIcon />
						</S.ButtonExpand>
					</S.AccordionSummary>

					<S.AccordionDetails>
						<S.MenuSubList>
							{subItems.map(({ label, icon, href }) => {
								return (
									<S.MenuListItem key={label}>
										<Link href={href}>
											<S.MenuItemIcon>{icon}</S.MenuItemIcon>
											<S.MenuItemLabel>{label}</S.MenuItemLabel>
										</Link>
									</S.MenuListItem>
								)
							})}
						</S.MenuSubList>
					</S.AccordionDetails>
				</S.Accordion>
			</S.MenuSub>
		)
	}

	return (
		<S.Sidebar open={isOpen}>
			<S.MenuList>
				{menu.map(({ label, icon, href, subItems }, idx) => {
					return subItems
						? renderItemWithSUb({ label, icon, subItems })
						: href && (
								<S.MenuListItem key={label} onClick={idx === 0 ? onSidebarOpen : undefined}>
									<Link href={href}>
										<S.MenuItemIcon>{icon}</S.MenuItemIcon>
										<S.MenuItemLabel>{label}</S.MenuItemLabel>
									</Link>
								</S.MenuListItem>
						  )
				})}
			</S.MenuList>
		</S.Sidebar>
	)
}
