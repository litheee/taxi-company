import { TextFieldProps } from '@mui/material/TextField'

import { TextField, InputMask } from 'ui'

export const OgrnField = (props: TextFieldProps) => {
	return (
		<InputMask alwaysShowMask mask="9 9 9 9 9 9 9 9 9 9 9 9 9">
			<TextField {...props} />
		</InputMask>
	)
}
