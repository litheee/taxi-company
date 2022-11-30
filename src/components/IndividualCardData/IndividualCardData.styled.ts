import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { AvatarUpload } from 'components/common/AvatarUpload/AvatarUpload.styled'
import { SelectContainer } from 'ui/Select/Select.styled'
import { TextField } from 'ui/TextField/TextField.styled'

export { FormColumn, Divider, FieldsRow }

export const IndividualCardData = styled.div`
	form {
		display: flex;

		& > ${Divider} {
			margin: 30px 0;
		}
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

		${SelectContainer} {
			max-width: 99px;
		}
	}
`
