import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface DividerProps {
	width?: number
	height?: number
	orientation?: 'vertical' | 'horizontal'
}

export const Divider = styled.div<DividerProps>`
	${({ orientation = 'vertical' }) =>
		orientation === 'vertical'
			? css`
					width: 2px;
					background: var(--color-gray-300);
			  `
			: css`
					width: 100%;
					height: 3px;
			  `}

	background: var(--color-gray-200);
	border-radius: 5px;

	${({ width }) =>
		width &&
		css`
			width: ${width}px;
		`}

	${({ height }) =>
		height &&
		css`
			height: ${height}px;
		`}
`
