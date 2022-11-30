import { SelectProps as MuiSelectProps } from '@mui/material/Select'

import { MenuItem, InputLabel } from 'ui'

import * as S from './Select.styled'

interface Option {
	label: string
	value: any
}

export interface SelectProps extends MuiSelectProps {
	options: Option[]
}

export const Select = ({ name, label, placeholder, options, ...props }: SelectProps) => {
	return (
		<S.SelectContainer>
			{label ? <InputLabel>{label}</InputLabel> : null}

			<S.Select
				displayEmpty
				defaultValue=""
				renderValue={(value: any) => {
					return value !== '' || !placeholder ? value : <S.Placeholder>{placeholder}</S.Placeholder>
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
		</S.SelectContainer>
	)
}
