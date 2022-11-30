import { TextFieldProps } from '@mui/material/TextField'

import { TextField, InputMask } from 'ui'

type PhoneFieldProps = { maskType?: 1 | 2 } & TextFieldProps

export const PhoneField = ({ maskType = 1, ...props }: PhoneFieldProps) => {
	return (
		<InputMask mask={maskType === 1 ? '+7 (999) 999 - 99 - 99' : '+7 (999) 999 99 99'}>
			<TextField type="tel" {...props} />
		</InputMask>
	)
}
