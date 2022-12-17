import Head from 'next/head'

import { SignInForm } from 'components'

import * as S from 'styled/pages/SignIn'

import Logo from 'public/icons/logo-text.svg'

const SignInPage = () => {
	return (
		<>
			<Head>
				<title>Вход</title>
			</Head>

			<S.SignInPage>
				<S.Logo>
					<Logo />
				</S.Logo>

				<SignInForm />
			</S.SignInPage>
		</>
	)
}

export default SignInPage
