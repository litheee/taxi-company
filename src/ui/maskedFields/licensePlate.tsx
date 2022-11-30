import { TextFieldProps } from '@mui/material/TextField'

import { TextField, InputMask } from 'ui'

export const LicensePlageField = (props: TextFieldProps) => {
	const letter = /(?!.*[DFIOQU])[А-Я]/i
	const digit = /[0-9]/
	const mask = [letter, ' ', digit, digit, digit, ' ', letter, letter]

	return (
		<InputMask
			mask={mask}
			beforeMaskedStateChange={({ currentState, nextState }) => {
				return {
					...nextState,
					value: nextState.value.toUpperCase()
				}
			}}
		>
			<TextField {...props} />
		</InputMask>
	)
}
