import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'
import { AvatarUpload } from 'common/AvatarUpload/AvatarUpload.styled'
import { TextareaRow, Textarea } from 'ui/Textarea/Textarea.styled'
import { Section } from 'common/Section/Section.styled'

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
			& > ${TextareaRow} ${Textarea} {
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
