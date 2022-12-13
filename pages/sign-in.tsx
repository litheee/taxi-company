import Head from 'next/head'
import { useForm, FormProvider } from 'react-hook-form'

import { Heading } from 'components/common'
import { Button } from 'ui'
import { PhoneField } from 'ui/maskedFields'

import * as S from 'styled/pages/SignIn'

import Logo from 'public/icons/logo-text.svg'

const SignInPage = () => {
	const useFormProps = useForm()

	return (
		<>
			<Head>
				<title>Вход</title>
			</Head>

			<S.SignInPage>
				<S.Logo>
					<Logo />
				</S.Logo>

				<FormProvider {...useFormProps}>
					<S.Form
						onSubmit={useFormProps.handleSubmit((data) => {
							console.log(data)
						})}
					>
						<Heading variant="h1">Вход</Heading>

						<PhoneField name="phone" label="Введите ваш номер телефона" />

						<Button color="green" fullWidth type="submit">
							Отправить код
						</Button>
					</S.Form>
				</FormProvider>
			</S.SignInPage>
		</>
	)
}

export default SignInPage
