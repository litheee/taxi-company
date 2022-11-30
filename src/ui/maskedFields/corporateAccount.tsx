import { TextFieldProps } from '@mui/material/TextField'

import { TextField, InputMask } from 'ui'

export const CorporateAccountField = (props: TextFieldProps) => {
	return (
		<InputMask mask="9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9">
			<TextField label="К/C" {...props} />
		</InputMask>
	)
}
