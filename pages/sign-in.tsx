import Head from 'next/head'

import { Heading } from 'common'
import { Button, TextField } from 'ui'

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

				<S.Form>
					<Heading>Вход</Heading>

					<S.Divider orientation="horizontal" />

					<TextField label="Введите ваш номер телефона" placeholder="+7 (___) ___ - __ - __" />

					<Button color="green" fullWidth>
						Отправить код
					</Button>
				</S.Form>
			</S.SignInPage>
		</>
	)
}

export default SignInPage
