import { SelectProps } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'

import * as S from './Select.styled'

export const Select = ({ name, label, placeholder, ...props }: SelectProps) => {
	return (
		<S.SelectRow>
			{label ? <InputLabel>{label}</InputLabel> : null}

			<S.Select
				displayEmpty
				defaultValue=""
				renderValue={(value: any) => {
					return value !== '' ? value : <S.Placeholder>{placeholder}</S.Placeholder>
				}}
				{...props}
			/>
		</S.SelectRow>
	)
}
