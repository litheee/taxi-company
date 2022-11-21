import { css } from '@emotion/react'
import styled from '@emotion/styled'
import MuiPopover from '@mui/material/Popover'

import { MenuButton } from 'ui'

import { FormColumn } from 'styled/components'
import { SelectRow } from 'ui/Select/Select.styled'
import { TextField } from 'ui/TextField/TextField.styled'
import { FormSection, Label } from 'ui/FormSection/FormSection.styled'
import { Button } from 'ui/Button/Button.styled'
import { Table } from 'ui/Table/Table.styled'

interface FiltersButtonProps {
	open: boolean
}

export { FormColumn }

export const DriversTable = styled.div`
	${Table} {
		width: calc(100% - 30px);
		margin: 0 15px;
	}
`

export const TextRed = styled.span`
	color: var(--color-red);
`

export const Filters = styled.div`
	display: flex;
	padding: 15px;
	background: var(--color-gray-300);

	${TextField} {
		max-width: 280px;
	}
`

export const FilterText = styled.span`
	display: flex;
	align-items: center;
	margin-left: 20px;
	color: var(--color-gray-100);

	svg {
		margin-right: 10px;
	}
`

export const SelectGroup = styled.div`
	display: flex;
	flex-grow: 1;
	gap: 15px;
	margin-left: 15px;

	${SelectRow} {
		max-width: 228px;
	}
`

export const FiltersButton = styled.button<FiltersButtonProps>`
	padding: 7px 10px;
	background: var(--color-gray-200);
	box-shadow: var(--box-shadow);
	border-radius: 5px;
	transition: 0.3s;

	${({ open }) =>
		open &&
		css`
			background: #2e353b;
		`}
`

export const AdditionalFiltersButton = styled(MenuButton)<FiltersButtonProps>`
	margin-left: 15px;
	background: var(--color-gray-200);
	box-shadow: var(--box-shadow);

	${({ open }) =>
		open &&
		css`
			background: #2e353b;
		`}
`

export const FiltersPopover = styled(MuiPopover)`
	.MuiPaper-root {
		width: 554px;
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
	}
`

export const AdditionalFiltersPopover = styled(MuiPopover)`
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
	}

	${FormSection} {
		${Label} {
			margin-bottom: 15px;
		}
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

export const Divider = styled.div`
	width: 2px;
	margin: 0 20px;
	border-radius: 5px;
	background: var(--color-gray-200);
`

export const FormContent = styled.div`
	display: flex;
	align-items: stretch;
`

export const CheckboxMoveRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
