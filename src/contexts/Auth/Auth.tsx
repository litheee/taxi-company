import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { authAPI } from 'api'
import { setCookie, removeCookie, getCookie } from 'utils'
import { ROUTE_NAMES } from 'constants/routes'
import { AuthContextProps, SendCode, ConfirmCode } from './auth.types'

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
	const router = useRouter()

	const [isAuthLoading, setAuthLoading] = useState(true)
	const [hash, setHash] = useState('')
	const [id, setId] = useState('')

	useEffect(() => {
		if (typeof window === 'undefined') return

		const hash = getCookie('hash')
		const id = getCookie('id')

		if (hash && id) {
			setHash(hash)
			setId(id)
			setAuthLoading(false)
		} else {
			setAuthLoading(false)
			router.push(ROUTE_NAMES.SIGN_IN)
		}
	}, [])

	const {
		mutate: sendCodeMutate,
		error: sendCodeError,
		isError: isSendCodeError,
		isSuccess: isSendCodeSuccess
	} = useMutation({
		mutationFn: ({ phone }: SendCode) => authAPI.login({ phone }),
		onSuccess: ({ hash, id }) => {
			if (hash && id) {
				setCookie('hash', hash)
				setCookie('id', id)
				setHash(hash)
				setId(id)
				router.push('/')
			}
		}
	})

	const {
		mutate: confirmCodeMutate,
		error: confirmCodeError,
		isError: isConfirmCodeError
	} = useMutation({
		mutationFn: ({ phone, code }: ConfirmCode) => authAPI.login({ phone, code }),
		onSuccess: ({ hash, id }) => {
			if (hash && id) {
				setCookie('hash', hash)
				setCookie('id', id)
				setHash(hash)
				setId(id)
				router.push('/')
			}
		}
	})

	const { mutate: logoutMutate } = useMutation({
		mutationFn: () => authAPI.login({ logout: true }),
		onSuccess: () => {
			removeCookie('hash')
			removeCookie('id')
			setHash('hash')
			setId('id')
			router.push(ROUTE_NAMES.SIGN_IN)
		}
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
	}

	const value: AuthContextProps = {
		hash,
		id,
		isAuthLoading,
		sendCode,
		isSendCodeSuccess,
		isSendCodeError,
		sendCodeErrorMessage,
		confirmCode,
		isConfirmCodeError,
		confirmCodeErrorMessage,
		logout
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
