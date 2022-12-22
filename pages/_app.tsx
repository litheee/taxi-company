import type { AppProps as NextAppProps } from 'next/app'
import { Fragment, useState } from 'react'
import { CacheProvider, EmotionCache, Global } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { RootLayout } from 'components/layouts'

import { AuthProvider, UserProvider } from 'contexts'
import { WSProvider } from 'contexts'

import { global, muiTheme } from 'styled/common'
import { createEmotionCache } from 'styled/common/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

interface AppProps extends NextAppProps {
	emotionCache: EmotionCache
}

export default function App({
	Component,
	pageProps,
	router,
	emotionCache = clientSideEmotionCache
}: AppProps) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: false,
						refetchOnWindowFocus: false
					}
				}
			})
	)

	const withoutLayoutPathnames = ['/sign-in']
	const isLayoutNotNeeded = withoutLayoutPathnames.some((pathname) =>
		router.pathname.startsWith(pathname)
	)
	const LayoutComponent = isLayoutNotNeeded ? Fragment : RootLayout

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<WSProvider>
					<AuthProvider>
						<UserProvider>
							<CacheProvider value={emotionCache}>
								<ThemeProvider theme={muiTheme}>
									<Global styles={global} />

									<LayoutComponent>
										<Component {...pageProps} />
									</LayoutComponent>
								</ThemeProvider>
							</CacheProvider>
						</UserProvider>
					</AuthProvider>
				</WSProvider>
			</Hydrate>
		</QueryClientProvider>
	)
}
