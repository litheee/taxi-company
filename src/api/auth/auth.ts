import { API } from 'core/axios'

interface Login {
	phone?: string
	code?: string
	logout?: boolean
}

interface LoginRes {
	success: boolean
	field?: string
	message?: string
	hash?: string
	id?: string
}

export const login = async ({ phone, code, logout }: Login) => {
	const { data } = await API.post<LoginRes>(
		logout ? '/login.php?/logout=1' : `/login.php?auth=${1}&phone=${phone}&code=${code}`
	)

	return data
}
