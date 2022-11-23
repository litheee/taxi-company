import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'
import { AvatarUpload } from 'common/AvatarUpload/AvatarUpload.styled'
import { Section } from 'common/Section/Section.styled'
import { Heading } from 'common/Heading/Heading.styled'
import { FormControlLabel } from 'ui/Checkbox/Checkbox.styled'

export { FormColumn, Divider, FieldsRow }

export const CarCardData = styled.div`
	form {
		display: flex;

		& > ${Divider} {
			margin: 30px 0;
		}
	}

	${AvatarUpload}:first-of-type {
		margin: 0 auto 30px;
	}

	${FormColumn} {
		&:nth-of-type(3) {
			${Section}:not(:last-child) ${Heading} {
				margin-bottom: 8px;
			}
		}

		${FormControlLabel} {
			margin-top: auto;
		}
	}
`
