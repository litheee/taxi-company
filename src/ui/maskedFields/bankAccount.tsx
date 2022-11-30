import { TextFieldProps } from '@mui/material/TextField'

import { TextField, InputMask } from 'ui'

export const BankAccountField = (props: TextFieldProps) => {
	return (
		<InputMask mask="9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9">
			<TextField label="Р/С" {...props} />
		</InputMask>
	)
}
