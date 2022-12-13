import styled from '@emotion/styled'
import MuiModal from '@mui/material/Modal'

import { Box, Divider } from 'styled/components'

import { HeadingContainer } from 'components/common/Heading/Heading.styled'

export { Divider }

export const Modal = styled(MuiModal)``

export const ModalContent = styled(Box)`
	position: relative;
	padding: 15px 20px;
	outline: none;

	& > ${HeadingContainer} {
		${Divider} {
			margin-top: 15px;
		}
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
