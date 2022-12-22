import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'

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

	const onMessage = useCallback((event: MessageEvent<any>) => {
		const { data, block } = JSON.parse(event.data)

		if (block === 'user') {
			const withoutUndefined = Object.fromEntries(
				Object.entries(transformUserRaw(data)).filter(([key, value]) => Boolean(value))
			)

			//@ts-ignore
			setUser(withoutUndefined)
			setUserLoading(false)
		}
	}, [])

	useEffect(() => {
		if (ws.isReady && ws.instance) {
			console.log('123')
			ws.instance.addEventListener('message', onMessage)
		}
	}, [ws.isReady, ws.instance, onMessage])

	const value = {
		user,
		isUserLoading
	}

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
