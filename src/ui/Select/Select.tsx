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
	options?: Option[]
} & MuiSelectProps

export const Select = ({
	name,
	label,
	placeholder,
	defaultValue = '',
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
				defaultValue={defaultValue}
				render={({ field }) => (
					<S.Select
						{...field}
						displayEmpty
						defaultValue={defaultValue}
						renderValue={(value: any) => {
							if (!options) return value

							const label = options.find(({ value: v }) => v === value)?.label

							return value !== '' || !placeholder ? (
								label
							) : (
								<S.Placeholder>{placeholder}</S.Placeholder>
							)
						}}
						{...props}
					>
						{!props.children && options
							? options.map(({ label, value }) => {
									return (
										<MenuItem key={label} value={value}>
											{label}
										</MenuItem>
									)
							  })
							: props.children}
					</S.Select>
				)}
			/>
		</S.SelectContainer>
	)
}
