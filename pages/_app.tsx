import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'

import { MainLayout } from 'layout'

import { ubuntu, lato } from 'core/loadFonts'
import { global, muiTheme } from 'styled/common'

export default function App({ Component, pageProps }: AppProps) {
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

				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</ThemeProvider>
		</>
	)
}
