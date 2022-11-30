import { TextFieldProps } from '@mui/material/TextField'

import { TextField, InputMask } from 'ui'

export const DateField = (props: TextFieldProps) => {
	return (
		<InputMask mask="99.99.9999">
			<TextField {...props} />
		</InputMask>
	)
}
