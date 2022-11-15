import { SelectProps } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'

import * as S from './Select.styled'

export const Select = ({ label, ...props }: SelectProps) => {
	return <S.Select input={<Input label={label} />} {...props} />
}
