import styled from '@emotion/styled'

import { Popover } from 'ui'
import { FormColumn, FieldsRow, Divider } from 'styled/components'

import { Section } from 'components/common/Section/Section.styled'
import { Heading } from 'components/common/Heading/Heading.styled'
import { Button } from 'ui/Button/Button.styled'
import { InputLabel } from 'ui/InputLabel/InputLabel.styled'
import { FormControlLabel } from 'ui/Checkbox/Checkbox.styled'

export { FormColumn, FieldsRow, Divider }

export const AdditionalFiltersPopover = styled(Popover)`
	.MuiPaper-root {
		width: 530px;
		padding: 15px 10px 20px;
		box-sizing: border-box;
		box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
	}

	form {
		${Button} {
			margin-top: 25px;
		}
	}

	${FormColumn} {
		padding: 0;

		${FieldsRow} {
			align-items: flex-end;
		}
	}

	${Section} {
		${InputLabel} {
			margin-bottom: 15px;
		}
	}

	${Divider} {
		margin: 0 20px;
	}

	${Heading} {
		margin-bottom: 15px;
	}
`

export const FormRow = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 10px;
`

export const CheckboxGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 15px 30px;
`

export const FormContent = styled.div`
	display: flex;
	align-items: stretch;

	${FormControlLabel} span {
		font-size: 14px;
		line-height: 16px;
	}
`
