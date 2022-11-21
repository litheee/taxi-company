import { css } from '@emotion/react'
import styled from '@emotion/styled'

type Color = 'green' | 'yellow' | 'orange' | 'red'

interface CarStatusProps {
	color: Color
}

const getColorStyles = (color: Color) => {
	switch (color) {
		case 'green':
			return css`
				span {
					background-image: linear-gradient(270deg, #88b114 0%, #579d2c 100%);
					text-shadow: 0px 2px 5px rgba(161, 200, 50, 0.1);
				}

				&::before {
					background-image: var(--gradient-green);
					filter: drop-shadow(0px 2px 5px rgba(161, 200, 50, 0.2));
				}
			`
		case 'yellow':
			return css`
				span {
					background-image: linear-gradient(45deg, #fcd062 -2.94%, #ffb702 102.94%);
					text-shadow: 0px 2px 5px rgba(252, 208, 98, 0.1);
				}

				&::before {
					background-image: linear-gradient(45deg, #fcd062 -2.94%, #ffb702 102.94%);
					filter: drop-shadow(0px 2px 5px rgba(252, 208, 98, 0.2));
				}
			`
		case 'orange':
			return css`
				span {
					background-image: linear-gradient(45deg, #f39200 -2.94%, #cf7c00 102.94%);
					text-shadow: 0px 2px 5px rgba(219, 154, 57, 0.1);
				}

				&::before {
					background-image: linear-gradient(45deg, #f39200 -2.94%, #cf7c00 102.94%);
					filter: drop-shadow(0px 2px 5px rgba(219, 154, 57, 0.2));
				}
			`
		case 'red':
			return css`
				span {
					background-image: linear-gradient(73.26deg, #914e4e 0%, #ff0000 100%);
					text-shadow: 0px 2px 5px rgba(255, 0, 0, 0.1);
				}

				&::before {
					background-image: linear-gradient(45deg, #ff0000 -2.94%, #740000 102.94%);
					filter: drop-shadow(0px 2px 5px rgba(255, 0, 0, 0.2));
				}
			`
	}
}

export const CarStatus = styled.div<CarStatusProps>`
	position: relative;
	padding-left: 19px;

	span {
		background-clip: text;
		color: transparent;
	}

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 8.5px;
		height: 8.5px;
		border-radius: 50%;
		transform: translateY(-50%);
	}

	${({ color }) => getColorStyles(color)}
`
