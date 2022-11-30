import { TextFieldProps } from '@mui/material/TextField'

import { TextField, InputMask } from 'ui'

export const VinField = (props: TextFieldProps) => {
	return (
		<InputMask alwaysShowMask mask="* * * * * * * * * * * * * * * * *">
			<TextField {...props} />
		</InputMask>
	)
}
