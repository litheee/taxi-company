import { TextFieldProps } from '@mui/material/TextField'

import { TextField, InputMask } from 'ui'

export const BankCardField = (props: TextFieldProps) => {
	return (
		<InputMask mask="9999 9999 9999 9999">
			<TextField label="Номер карты" {...props} />
		</InputMask>
	)
}
