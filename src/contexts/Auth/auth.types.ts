export interface AuthContextProps {
	hash: string
	id: string
	isAuthLoading: boolean
	sendCode: (phone: string) => void
	isSendCodeSuccess: boolean
	isSendCodeError: boolean
	sendCodeErrorMessage: any
	confirmCode: (phone: string, code: string) => void
	isConfirmCodeError: boolean
	confirmCodeErrorMessage: any
	logout: () => void
}

export interface SendCode {
	phone: string
}

export interface ConfirmCode {
	phone: string
	code: string
}
