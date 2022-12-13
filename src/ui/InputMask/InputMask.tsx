import { TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { Props as ReactInputMaskProps } from 'react-input-mask'

import { TextField } from 'ui/TextField/TextField.styled'

import * as S from './InputMask.styled'

type InputMaskProps = {
	name: string
	maskProps: ReactInputMaskProps
} & TextFieldProps

export const InputMask = ({ name, maskProps, ...props }: InputMaskProps) => {
	const { control } = useFormContext()

	return (
		<Controller
			name={name}
			control={control}
			defaultValue=""
			render={({ field: { value, onChange } }) => (
				<S.InputMask
					alwaysShowMask
					{...maskProps}
					value={value}
					onChange={({ target }) => {
						const { value } = target
						const unmaskedValue = value.replace(/[^\d]/g, '')

						return onChange(unmaskedValue)
					}}
				>
					{/* @ts-ignore */}
					{(inputProps: any) => <TextField {...props} {...inputProps} />}
				</S.InputMask>
			)}
		/>
	)
}
