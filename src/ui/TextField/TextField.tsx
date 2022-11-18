import { TextFieldProps } from '@mui/material/TextField'

import * as S from './TextField.styled'

export const TextField = (props: TextFieldProps) => {
	return <S.TextField {...props} InputLabelProps={{ shrink: true, ...props.InputLabelProps }} />
}
