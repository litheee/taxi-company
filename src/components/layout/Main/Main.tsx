import Image from 'next/image'
import { useState, FC, PropsWithChildren } from 'react'

import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

import bgImg from 'public/img/main-background.png'

import * as S from './Main.styled'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen)
	}

	return (
		<S.MainLayout>
			<Sidebar isOpen={isSidebarOpen} onSidebarOpen={toggleSidebar} />

			<S.Content isSidebarOpen={isSidebarOpen}>
				<Header />

				<S.Main>{children}</S.Main>
			</S.Content>

			<S.Background>
				<Image src={bgImg} alt="фон" priority />
			</S.Background>
		</S.MainLayout>
	)
}
