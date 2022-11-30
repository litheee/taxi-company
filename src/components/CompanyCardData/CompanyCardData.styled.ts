import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { AvatarUpload } from 'components/common/AvatarUpload/AvatarUpload.styled'
import { Section } from 'components/common/Section/Section.styled'
import { TextareaContainer, Textarea } from 'ui/Textarea/Textarea.styled'

export { FormColumn, Divider, FieldsRow }

export const CompanyCardData = styled.div`
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
			& > ${TextareaContainer} ${Textarea} {
				min-height: 48px;
				text-align: center;
			}

			${Section}:last-of-type ${Textarea} {
				min-height: 80px;
			}
		}

		&:last-of-type {
			${FieldsRow} {
				label {
					word-spacing: 9999999px;
				}
			}
		}
	}
`
