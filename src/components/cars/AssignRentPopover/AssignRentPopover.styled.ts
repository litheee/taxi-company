import styled from '@emotion/styled'

import { PopoverWithClose } from 'components/common'
import { FieldsRow, Divider } from 'styled/components'

import { Button } from 'ui/Button/Button.styled'

export { FieldsRow, Divider }

export const CarAssignRentPopover = styled(PopoverWithClose)`
	.MuiPaper-root {
		width: 382px;
		height: 446px;
		margin-left: 15px;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-top: 10px;

	& > *:not(:last-child) {
		margin-bottom: 15px;
	}

	${Button} {
		margin-top: auto;
	}
`
