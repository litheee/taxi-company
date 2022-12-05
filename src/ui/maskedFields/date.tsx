import { InputMask } from 'ui'

import { TextFieldProps } from 'ui/TextField/TextField'

export const DateField = ({ name, ...props }: TextFieldProps) => (
	<InputMask name={name} maskProps={{ mask: '99.99.9999' }} {...props} />
)
