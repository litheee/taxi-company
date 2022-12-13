import { FC, PropsWithChildren } from 'react'

import * as S from './ColoredDotText.styled'

type Color = 'green' | 'yellow' | 'orange' | 'red' | 'blue' | 'gray'

interface ColoredDotTextProps {
	color: Color
}

export const ColoredDotText: FC<PropsWithChildren<ColoredDotTextProps>> = ({
	color,
	children
}) => {
	return (
		<S.ColoredDotText color={color}>
			<S.Dot>
				<span />
			</S.Dot>

			<span>{children}</span>
		</S.ColoredDotText>
	)
}
