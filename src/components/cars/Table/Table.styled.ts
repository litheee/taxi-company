import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Popover } from 'ui'
import { MenuButton } from 'components/common'

import { FormColumn, Divider, FieldsRow } from 'styled/components'

import { Section } from 'components/common/Section/Section.styled'
import { NotificationsNumber } from 'components/common/NotificationsNumber/NotificationsNumber.styled'
import { Heading } from 'components/common/Heading/Heading.styled'
import { SelectContainer } from 'ui/Select/Select.styled'
import { TableCell, Table, TableContainer } from 'ui/Table/Table.styled'
import { TextField } from 'ui/TextField/TextField.styled'
import { Button } from 'ui/Button/Button.styled'
import { InputLabel } from 'ui/InputLabel/InputLabel.styled'
import { FormControlLabel } from 'ui/Checkbox/Checkbox.styled'

interface FiltersButtonProps {
	open: boolean
}

export { FormColumn, Divider, FieldsRow }

export const CarsTable = styled.div`
	max-width: 1494px;

	${TableContainer} {
		&::before,
		&::after {
			position: absolute;
			left: 15px;
			width: calc(100% - 30px);
		}
	}

	${Table} {
		width: calc(100% - 30px);
		margin: 0 15px;
	}

	${TableCell} {
		&:nth-of-type(2) {
			min-width: 140px;
		}
	}
`

export const Row = styled.span`
	display: flex;
	justify-content: space-between;

	${NotificationsNumber} {
		margin-left: 4px;
	}
`

export const Filters = styled.div`
	display: flex;
	padding: 15px;
	border-radius: 5px 5px 0 0;
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

	${SelectContainer} {
		&:nth-of-type(1) {
			max-width: 240px;
		}

		&:nth-of-type(2) {
			max-width: 120px;
		}

		&:nth-of-type(3) {
			max-width: 273px;
		}
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
			background: var(--color-gray-400);
		`}
`

export const AdditionalFiltersButton = styled(MenuButton)<FiltersButtonProps>`
	margin-left: 15px;
	background: var(--color-gray-200);
	box-shadow: var(--box-shadow);

	${({ open }) =>
		open &&
		css`
			background: var(--color-gray-400);
		`}
`

export const FiltersPopover = styled(Popover)`
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

		& > *:not(:last-child) {
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

export const CheckboxMoveRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
