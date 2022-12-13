import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { AvatarUpload } from 'components/common/AvatarUpload/AvatarUpload.styled'
import { SelectContainer } from 'ui/Select/Select.styled'
import { Textarea } from 'ui/Textarea/Textarea.styled'
import { HeadingContainer } from 'components/common/Heading/Heading.styled'

export { FormColumn, Divider, FieldsRow }

export const FirstColumn = styled(FormColumn)`
	${AvatarUpload} {
		margin: 0 auto;
		margin-bottom: 25px;
	}
`

export const SecondColumn = styled(FormColumn)`
	${Textarea} {
		min-height: 96px;
	}
`

export const CounterpartyDataForm = styled.form`
	display: flex;

	& > ${Divider} {
		margin: 30px 0;
	}

	${HeadingContainer} {
		margin-bottom: 15px;

		${Divider} {
			margin-top: 5px;
			border-radius: 5px;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
		}
	}

	${FormColumn}, ${FirstColumn}, ${SecondColumn} {
		& > div > *:not(:last-child) {
			margin-bottom: 15px;
		}
	}
`

export const AdditionalContacts = styled.div`
	& > *:not(:last-child) {
		margin-bottom: 15px;
	}

	span {
		display: flex;
		gap: 10px;

		${SelectContainer} {
			max-width: 99px;
		}
	}
`
