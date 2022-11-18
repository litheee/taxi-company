import styled from '@emotion/styled'

import { FormColumn } from 'styled/components'
import { AvatarUpload } from 'ui/AvatarUpload/AvatarUpload.styled'
import { FormSection, Label } from 'ui/FormSection/FormSection.styled'

export { FormColumn }

export const CarCardData = styled.div`
	form {
		display: flex;
	}

	${AvatarUpload}:first-of-type {
		margin: 0 auto 30px;
	}

	${FormColumn} {
		&:nth-of-type(3),
		&:nth-of-type(5) {
			padding-top: 22px;
		}

		&:nth-of-type(3) {
			${FormSection}:not(:last-child) ${Label} {
				margin-bottom: 10px;
			}
		}
	}
`

export const Row = styled.div`
	display: flex;
	gap: 10px;
`
export const Divider = styled.div`
	flex: 1;
	width: 2px;
	margin: 30px 0;
	border-radius: 5px;
	background: var(--color-gray-200);
`

export const CheckboxRow = styled.div`
	display: flex;
	align-items: center;
	margin-top: auto;

	& > span:last-child {
		margin-left: 10px;
	}
`
