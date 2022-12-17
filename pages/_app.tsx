import type { AppProps as NextAppProps } from 'next/app'
import { Fragment, useState } from 'react'
import { CacheProvider, EmotionCache, Global } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { RootLayout } from 'components/layouts'

import { global, muiTheme } from 'styled/common'
import { createEmotionCache } from 'styled/common/createEmotionCache'
import { AuthProvider } from 'contexts'

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
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={muiTheme}>
				<Global styles={global} />

				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						<LayoutComponent>
							<Hydrate state={pageProps.dehydratedState}>
								<Component {...pageProps} />
							</Hydrate>
						</LayoutComponent>
					</AuthProvider>
				</QueryClientProvider>
			</ThemeProvider>
		</CacheProvider>
	)
}
