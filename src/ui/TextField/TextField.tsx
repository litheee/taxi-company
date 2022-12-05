import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'
import { useFormContext, Controller } from 'react-hook-form'

import * as S from './TextField.styled'

export type TextFieldProps = {
	name: string
} & MuiTextFieldProps

export const TextField = ({
	InputLabelProps,
	name,
	...props
}: TextFieldProps) => {
	const { control } = useFormContext()

	return (
		<Controller
			name={name}
			control={control}
			defaultValue=""
			render={({ field }) => {
				return <S.TextField {...field} {...props} />
			}}
		/>
	)
}
