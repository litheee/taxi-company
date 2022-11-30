import Head from 'next/head'

import { Heading } from 'components/common'
import { Button } from 'ui'
import { PhoneField } from 'ui/maskedFields'

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
					<Heading variant="h1">Вход</Heading>

					<S.Divider orientation="horizontal" />

					<PhoneField label="Введите ваш номер телефона" />

					<Button color="green" fullWidth>
						Отправить код
					</Button>
				</S.Form>
			</S.SignInPage>
		</>
	)
}

export default SignInPage
