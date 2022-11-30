import { FC, PropsWithChildren } from 'react'

import * as S from './ColoredDotText.styled'

type Color = 'green' | 'yellow' | 'orange' | 'red' | 'blue'

interface ColoredDotTextProps {
	color: Color
}

export const ColoredDotText: FC<PropsWithChildren<ColoredDotTextProps>> = ({ color, children }) => {
	return (
		<S.ColoredDotText color={color}>
			<span>{children}</span>
		</S.ColoredDotText>
	)
}
