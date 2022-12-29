import { Props as ReactInputMaskProps } from 'react-input-mask'
import { TextFieldProps } from 'ui/TextField/TextField'

import { InputMask } from 'ui'

export const DateField = ({
	name,
	maskProps,
	...props
}: TextFieldProps & { maskProps?: Omit<ReactInputMaskProps, 'mask'> }) => (
	<InputMask
		name={name}
		maskProps={{ ...maskProps, mask: '99.99.9999' }}
		inputProps={{
			name
		}}
		{...props}
	/>
)
