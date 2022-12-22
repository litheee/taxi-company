import { createContext, ReactNode, useEffect, useState } from 'react'

import { useWS } from 'hooks'
import { User, UserContextProps, UserRaw } from './User.types'

const transformUserRaw = (user: UserRaw): User => {
	const { fname: firstName, mname: middleName, lname: lastName } = user

	return {
		firstName,
		middleName,
		lastName
	}
}

export const UserContext = createContext({} as UserContextProps)

export const UserProvider = ({ children }: { children: ReactNode }): JSX.Element => {
	const defaultValues: User = {
		firstName: '',
		middleName: '',
		lastName: ''
	}

	const ws = useWS()
	const [user, setUser] = useState<User>(defaultValues)
	const [isUserLoading, setUserLoading] = useState(true)

	useEffect(() => {
		if (!ws.isReady || !ws.instance) return

		ws.instance.onmessage = (event) => {
			const { data, block } = JSON.parse(event.data)

			if (block === 'user') {
				const withoutUndefined = Object.fromEntries(
					Object.entries(transformUserRaw(data)).filter(([key, value]) => Boolean(value))
				)

				//@ts-ignore
				setUser((user) => ({
					...user,
					...withoutUndefined
				}))
				setUserLoading(false)
			}
		}
	}, [ws.isReady, ws.instance])

	const value = {
		user,
		isUserLoading
	}

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
