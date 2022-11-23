import { Heading } from 'common'
import Image from 'next/image'

import * as S from 'styled/pages/SignIn'
import { Button, TextField } from 'ui'

const SignInPage = () => {
	return (
		<S.SignInPage>
			<S.Logo>
				<Image src="/img/logo.svg" width={275} height={136} alt="Восход" priority quality={100} />
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
	)
}

export default SignInPage
