import { useWS } from 'hooks/useWS'
import { User, UserRaw } from './useUser.types'

export const useUser = () => {
	// const defaultValues: User = {
	// 	firstName: '',
	// 	middleName: '',
	// 	lastName: ''
	// }

	const transformUserRaw = (user: UserRaw): User => {
		const { fname: firstName, mname: middleName, lname: lastName } = user

		return {
			firstName,
			middleName,
			lastName
		}
	}

	const { data, isLoading } = useWS({
		block: 'user',
		subscription: false,
		transformRaw: transformUserRaw
	})

	return {
		user: data,
		isUserLoading: isLoading
	}
}
