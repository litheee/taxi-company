import { css } from '@emotion/react'
import styled from '@emotion/styled'

type Color = 'blue' | 'green'

interface ButtonGradientProps {
	color: Color
}

const getColorStyles = (color: Color) => {
	switch (color) {
		case 'green':
			return css`
				transition: 0.3s;
				background: var(--gradient-green);

				&:hover {
					background: linear-gradient(268.87deg, #88b114 -10.28%, #558f09 27.63%, #408104 100%);
				}

				/* &:active {
					background: #2c7400;
				} */
			`

		case 'blue':
			return css`
				transition: 0.3s;
				background: var(--gradient-blue);

				&:hover {
					background: linear-gradient(93.88deg, #2f98cf 0%, #2fcfb2 100%);
				}

				/* &:active {
					background: #2f98cf;
				} */
			`
	}
}

export const ButtonGradient = styled.button<ButtonGradientProps>`
	transition: 0.3s;

	${({ color }) => getColorStyles(color)}
`
