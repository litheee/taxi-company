import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'

import { MainLayout } from 'layout'

import { muiTheme } from 'styled/muiTheme'
import { global } from 'styled/global'
import 'public/fonts/fonts.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={muiTheme}>
			<Global styles={global} />

			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</ThemeProvider>
	)
}
