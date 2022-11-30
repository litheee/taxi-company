import { TextFieldProps } from '@mui/material/TextField'

import { TextField, InputMask } from 'ui'

export const BikField = (props: TextFieldProps) => {
	return (
		<InputMask mask="9 9 9 9 9 9 9 9 9">
			<TextField label="БИК" {...props} />
		</InputMask>
	)
}
