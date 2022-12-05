import { ModalProps as MuiModalProps } from '@mui/material/Modal'

import { Heading } from 'components/common'

import * as S from './Modal.styled'

import CrossIcon from 'public/icons/cross-circle.svg'

interface ModalProps extends MuiModalProps {
	heading?: string | JSX.Element
	variant?: 1 | 2
}

export const Modal = ({ children, heading, variant = 1, ...props }: ModalProps) => {
	return (
		<S.Modal {...props} slots={{ backdrop: S.Backdrop }}>
			<S.ModalContent variant={variant}>
				{heading ? (
					<>
						<Heading variant="h2">{heading}</Heading>
						<S.Divider orientation="horizontal" />
					</>
				) : null}

				{children}

				<S.CloseButton onClick={(e) => props.onClose && props.onClose(e, 'backdropClick')}>
					<CrossIcon width={24} height={24} viewBox="0 0 21 21" />
				</S.CloseButton>
			</S.ModalContent>
		</S.Modal>
	)
}
