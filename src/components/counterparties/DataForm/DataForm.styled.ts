import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { AvatarUpload } from 'components/common/AvatarUpload/AvatarUpload.styled'
import { Section } from 'components/common/Section/Section.styled'
import { SelectContainer } from 'ui/Select/Select.styled'
import { TextField } from 'ui/TextField/TextField.styled'
import { Textarea } from 'ui/Textarea/Textarea.styled'

export { FormColumn, Divider, FieldsRow }

export const CounterpartyDataForm = styled.form`
	display: flex;

	& > ${Divider} {
		margin: 30px 0;
	}

	${AvatarUpload} {
		margin: 0 auto;
		margin-bottom: 25px;
	}
`

export const FirstColumn = styled(FormColumn)`
	& > ${TextField} {
		margin-bottom: 15px;

		&:nth-of-type(4) {
			margin-bottom: 20px;
		}
	}

	${Section}:last-of-type {
		span {
			display: flex;
			gap: 10px;

			${SelectContainer} {
				max-width: 99px;
			}
		}
	}
`

export const SecondColumn = styled(FormColumn)`
	${Textarea} {
		min-height: 96px;
	}
`
