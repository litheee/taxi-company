import { useState } from 'react'
import Image from 'next/image'

import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

import { WSProvider } from 'contexts'
import { useAuth } from 'hooks'

import * as S from './Root.styled'

import bgImg from 'public/img/main-background.png'

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(false)

	const { hash, id, isAuthLoading } = useAuth()

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen)
	}

	if (!hash || !id || isAuthLoading) return <div>loading...</div>

	return (
		<WSProvider hash={hash} id={id}>
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
		</WSProvider>
	)
}
