import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useState } from 'react'

import { useWS } from 'hooks'
import { authAPI } from 'api'
import { ROUTE_NAMES } from 'constants/routes'
import { AuthContextProps, SendCode, ConfirmCode, HandleLogin } from './Auth.types'

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
	const router = useRouter()
	const ws = useWS({
		block: '',
		subscription: false,
		listener: false
	})

	const [showWelcomeScreen, setShowWelcomeScreen] = useState(false)

	const onAuthSuccess = ({ hash, id }: HandleLogin) => {
		ws.connect(hash, id)

		if (router.pathname === ROUTE_NAMES.SIGN_IN) {
			router.push('/')
		}
	}

	useQuery({
		queryKey: ['auth'],
		queryFn: authAPI.checkAuth,
		onSuccess: onAuthSuccess,
		onError: () => {
			router.push(ROUTE_NAMES.SIGN_IN)
		}
	})

	const {
		mutate: sendCodeMutate,
		error: sendCodeError,
		isError: isSendCodeError,
		isSuccess: isSendCodeSuccess,
		reset: resetSendCode
	} = useMutation({
		mutationFn: ({ phone }: SendCode) => authAPI.sendCode({ phone })
	})

	const {
		mutate: confirmCodeMutate,
		error: confirmCodeError,
		isError: isConfirmCodeError
	} = useMutation({
		mutationFn: ({ phone, code }: ConfirmCode) => authAPI.confirmCode({ phone, code }),
		onSuccess: ({ hash, id }) => {
			onAuthSuccess({ hash, id })
			setShowWelcomeScreen(true)
		}
	})

	const { mutate: logoutMutate } = useMutation({
		mutationFn: () => authAPI.logout()
	})

	//@ts-ignore
	const sendCodeErrorMessage = sendCodeError?.response?.data?.message
	//@ts-ignore
	const confirmCodeErrorMessage = confirmCodeError?.response?.data?.message

	const sendCode = (phone: string) => {
		sendCodeMutate({ phone })
	}

	const confirmCode = (phone: string, code: string) => {
		confirmCodeMutate({ phone, code })
	}

	const logout = () => {
		logoutMutate()
		resetSendCode()
		ws.disconnect()
		router.push(ROUTE_NAMES.SIGN_IN)
	}

	const value: AuthContextProps = {
		showWelcomeScreen,
		sendCode,
		isSendCodeSuccess,
		isSendCodeError,
		sendCodeErrorMessage,
		confirmCode,
		isConfirmCodeError,
		confirmCodeErrorMessage,
		logout
	}

	return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>
}
