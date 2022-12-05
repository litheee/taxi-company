import styled from '@emotion/styled'

import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { AvatarUpload } from 'components/common/AvatarUpload/AvatarUpload.styled'
import { Section } from 'components/common/Section/Section.styled'
import { Heading } from 'components/common/Heading/Heading.styled'
import { FormControlLabel } from 'ui/Checkbox/Checkbox.styled'

export { FormColumn, Divider, FieldsRow }

export const Form = styled.form`
	display: flex;

	& > ${Divider} {
		margin: 30px 0;
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
