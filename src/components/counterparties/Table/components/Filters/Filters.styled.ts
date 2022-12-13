import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { MenuButton } from 'components/common'

import { TextField } from 'ui/TextField/TextField.styled'

interface FiltersButtonProps {
	open: boolean
}

export const Filters = styled.div`
	display: flex;
	gap: 20px;
	padding: 15px 15px 0;
	border-radius: 5px 5px 0 0;

	${TextField} {
		max-width: 280px;

		.MuiInputBase-root {
			height: 40px;
		}
	}
`

export const SelectGroup = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
	gap: 15px;
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
	background: var(--color-gray-200);
	box-shadow: var(--box-shadow);

	${({ open }) =>
		open &&
		css`
			background: var(--color-gray-400);
		`}
`

export const ButtonsGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
