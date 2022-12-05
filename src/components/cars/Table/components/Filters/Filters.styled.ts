import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { MenuButton } from 'components/common'

import { SelectContainer } from 'ui/Select/Select.styled'
import { TextField } from 'ui/TextField/TextField.styled'

interface FiltersButtonProps {
	open: boolean
}

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
