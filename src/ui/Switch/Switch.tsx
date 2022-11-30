import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch'

import * as S from './Switch.styled'

interface SwitchProps extends MuiSwitchProps {
	label?: string
}

export const Switch = ({ label, ...props }: SwitchProps) => {
	return label ? <S.FormControlLabel label={label} control={<S.Switch {...props} />} /> : <S.Switch {...props} />
}
