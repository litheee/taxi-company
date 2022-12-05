import { useState } from 'react'
import Image from 'next/image'

import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

import * as S from './Root.styled'

import bgImg from 'public/img/main-background.png'

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen)
	}

	return (
		<S.RootLayout>
			<Sidebar isOpen={isSidebarOpen} onSidebarToggle={toggleSidebar} />

			<S.Content isSidebarOpen={isSidebarOpen}>
				<Header />

				<S.Main>{children}</S.Main>
			</S.Content>

			<S.Background>
				<Image src={bgImg} alt="фон" priority />
			</S.Background>
		</S.RootLayout>
	)
}
