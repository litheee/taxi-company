import { SelectProps as MuiSelectProps } from '@mui/material/Select'
import { useFormContext, Controller } from 'react-hook-form'

import { MenuItem, InputLabel } from 'ui'

import * as S from './Select.styled'

interface Option {
	label: string
	value: any
}

export type SelectProps = {
	name: string
	options: Option[]
} & MuiSelectProps

export const Select = ({
	name,
	label,
	placeholder,
	options,
	...props
}: SelectProps) => {
	const { control } = useFormContext()

	return (
		<S.SelectContainer>
			{label ? <InputLabel>{label}</InputLabel> : null}

			<Controller
				name={name}
				control={control}
				defaultValue=""
				render={({ field }) => (
					<S.Select
						{...field}
						displayEmpty
						renderValue={(value: any) => {
							return value !== '' || !placeholder ? (
								value
							) : (
								<S.Placeholder>{placeholder}</S.Placeholder>
							)
						}}
						{...props}
					>
						{options.map(({ label, value }) => {
							return (
								<MenuItem key={label} value={value}>
									{label}
								</MenuItem>
							)
						})}
					</S.Select>
				)}
			/>
		</S.SelectContainer>
	)
}
