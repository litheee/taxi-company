import { TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { Props as ReactInputMaskProps } from 'react-input-mask'

import { TextField } from 'ui/TextField/TextField.styled'

import * as S from './InputMask.styled'

type InputMaskProps = {
	name: string
	maskProps: ReactInputMaskProps
} & TextFieldProps

export const InputMask = ({ name, maskProps, onChange, ...props }: InputMaskProps) => {
	const { control } = useFormContext()

	return (
		<Controller
			name={name}
			control={control}
			defaultValue=""
			render={({ field }) => (
				<S.InputMask
					alwaysShowMask
					{...maskProps}
					value={field.value}
					onChange={(e) => {
						const { value } = e.target
						const unmaskedValue = value.replace(/[^\d]/g, '')

						if (onChange) {
							onChange(e)
						}

						return field.onChange(unmaskedValue)
					}}
				>
					{/* @ts-ignore */}
					{(inputProps: any) => <TextField {...props} {...inputProps} />}
				</S.InputMask>
			)}
		/>
	)
}
