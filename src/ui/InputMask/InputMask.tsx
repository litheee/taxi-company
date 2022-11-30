import { Props } from 'react-input-mask'

import * as S from './InputMask.styled'

export const InputMask = (props: Props) => {
	return <S.InputMask alwaysShowMask {...props} />
}
