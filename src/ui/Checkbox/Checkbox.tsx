import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox'

import * as S from './Checkbox.styled'

interface CheckboxProps extends MuiCheckboxProps {
	label?: string
}

export const Checkbox = (props: CheckboxProps) => {
	const { label } = props

	return label ? <S.FormControlLabel control={<S.Checkbox {...props} />} label={label} /> : <S.Checkbox {...props} />
}
