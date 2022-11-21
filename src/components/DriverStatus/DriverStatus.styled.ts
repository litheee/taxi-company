import { css } from '@emotion/react'
import styled from '@emotion/styled'

type Color = 'green' | 'red'

interface DriverStatusProps {
	color: Color
}

const getColorStyles = (color: Color) => {
	switch (color) {
		case 'green':
			return css`
				background-image: linear-gradient(270deg, #88b114 0%, #579d2c 100%);
			`
		case 'red':
			return css`
				color: #ee2929;
			`
	}
}

export const DriverStatus = styled.span<DriverStatusProps>`
	background-clip: text;
	color: transparent;

	${({ color }) => getColorStyles(color)}
`
