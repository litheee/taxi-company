import styled from '@emotion/styled'

import { FormColumn } from 'styled/components'
import { AvatarUpload } from 'ui/AvatarUpload/AvatarUpload.styled'
import { FormSection } from 'ui/FormSection/FormSection.styled'
import { TextareaRow, Textarea } from 'ui/Textarea/Textarea.styled'

export { FormColumn }

export const Row = styled.div`
	display: flex;
	gap: 10px;
`

export const CompanyCardData = styled.div`
	form {
		display: flex;
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

			${FormSection}:last-of-type ${Textarea} {
				min-height: 80px;
			}
		}

		&:last-of-type {
			${Row} {
				label {
					word-spacing: 9999999px;
				}
			}
		}
	}
`

export const Divider = styled.div`
	flex: 1;
	width: 2px;
	margin: 30px 0;
	border-radius: 5px;
	background: var(--color-gray-200);
`
