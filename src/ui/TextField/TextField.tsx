import { TextFieldProps } from '@mui/material/TextField'

import * as S from './TextField.styled'

export const TextField = ({ InputLabelProps, ...props }: TextFieldProps) => {
	return <S.TextField defaultValue="" {...props} />
}
