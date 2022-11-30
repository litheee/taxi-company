import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'

import { MainLayout } from 'components/layout'

import { ubuntu, lato } from 'core/loadFonts'
import { global, muiTheme } from 'styled/common'

export default function App({ Component, pageProps, router }: AppProps) {
	const withoutLayoutPathnames = ['/sign-in']

	return (
		<>
			<style jsx global>
				{`
					:root {
						--font-ubuntu: ${ubuntu.style.fontFamily};
						--font-lato: ${lato.style.fontFamily};
					}
				`}
			</style>

			<ThemeProvider theme={muiTheme}>
				<Global styles={global} />

				{withoutLayoutPathnames.some((pathname) => router.pathname.startsWith(pathname)) ? (
					<Component {...pageProps} />
				) : (
					<MainLayout>
						<Component {...pageProps} />
					</MainLayout>
				)}
			</ThemeProvider>
		</>
	)
}
