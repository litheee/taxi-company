import { css } from '@emotion/react'
import styled from '@emotion/styled'
import MuiModal from '@mui/material/Modal'

import { Box, Divider } from 'styled/components'

interface ModalContentProps {
	variant: 1 | 2
}

const getModalContentStyles = (variant: 1 | 2) => {
	switch (variant) {
		case 1:
			return css`
				padding: 15px 20px;
				background: var(--color-gray-400);
			`
		case 2:
			return css`
				padding: 20px 30px;
				background: var(--color-gray-300);
			`
	}
}

export { Divider }

export const Modal = styled(MuiModal)``

export const ModalContent = styled(Box)<ModalContentProps>`
	position: relative;
	outline: none;

	${({ variant }) => getModalContentStyles(variant)}

	${Divider} {
		margin-top: 15px;
		height: 2px;
		border-radius: 1px;
	}
`

export const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: -34px;
	width: 24px;
	height: 24px;
`

export const Backdrop = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(5px);
	-webkit-tap-highlight-color: transparent;
	z-index: -1;
`
