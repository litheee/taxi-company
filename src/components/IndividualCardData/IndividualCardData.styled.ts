import styled from '@emotion/styled'

import { FormColumn } from 'styled/components'
import { AvatarUpload } from 'ui/AvatarUpload/AvatarUpload.styled'
import { SelectRow } from 'ui/Select/Select.styled'
import { TextField } from 'ui/TextField/TextField.styled'

export { FormColumn }

export const IndividualCardData = styled.div`
	form {
		display: flex;
	}

	${AvatarUpload} {
		margin: 0 auto 20px;
	}

	${FormColumn} {
		&:first-of-type {
			& > ${TextField}:nth-of-type(2) input {
				text-align: center;
			}
		}
	}
`

export const AdditionalContacts = styled.div`
	width: 100%;

	& > span {
		display: flex;
		gap: 10px;
		margin-top: 10px;

		${SelectRow} {
			max-width: 99px;
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
