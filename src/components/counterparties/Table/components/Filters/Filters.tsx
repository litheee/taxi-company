import { MouseEvent, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from 'ui'
import { FilterSelect, FilterText, SearchField } from 'components/common'
import { FiltersPopover } from '../FiltersPopover/FiltersPopover'
import { AdditionalFiltersPopover } from '../AdditionalFiltersPopover/AdditionalFiltersPopover'

import * as S from './Filters.styled'

import GearIcon from 'public/icons/gear.svg'
import PlusIcon from 'public/icons/plus.svg'

export const Filters = () => {
	const useFormProps = useForm()

	const [filtersPopoverAnchorEl, setFiltersPopoverAnchorEl] =
		useState<HTMLButtonElement | null>(null)

	const [additionalFiltersPopoverAnchorEl, setAdditionalFiltersPopoverAnchorEl] =
		useState<HTMLButtonElement | null>(null)

	const isFiltersPopoverOpen = Boolean(filtersPopoverAnchorEl)
	const isAdditionalFiltersPopoverOpen = Boolean(additionalFiltersPopoverAnchorEl)

	const openFiltersPopover = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
		setFiltersPopoverAnchorEl(currentTarget)
	}

	const openAdditionalFiltersPopover = ({
		currentTarget
	}: MouseEvent<HTMLButtonElement>) => {
		setAdditionalFiltersPopoverAnchorEl(currentTarget)
	}

	const closeFiltersPopover = () => {
		setFiltersPopoverAnchorEl(null)
	}

	const closeAdditionalFiltersPopover = () => {
		setAdditionalFiltersPopoverAnchorEl(null)
	}

	const options = [
		{ label: 'Все', value: 'all' },
		{ label: 'Остальные', value: 'other' }
	]

	return (
		<>
			<FormProvider {...useFormProps}>
				<S.Filters>
					<SearchField name="search" placeholder="Введите статус, год и пр." />

					<S.SelectGroup>
						<FilterText>Фильтры:</FilterText>

						<FilterSelect
							name="status"
							placeholder="Статус:"
							defaultValue="all"
							options={options}
						/>

						<FilterSelect
							name="workingConditions"
							placeholder="Условия работы:"
							defaultValue="all"
							options={options}
						/>

						<FilterSelect
							name="aggregators"
							placeholder="Агрегаторы:"
							defaultValue="all"
							options={options}
						/>

						<FilterSelect
							name="roles"
							placeholder="Роли:"
							defaultValue="all"
							options={options}
						/>
					</S.SelectGroup>

					<S.ButtonsGroup>
						<S.AdditionalFiltersButton
							open={isAdditionalFiltersPopoverOpen}
							onClick={openAdditionalFiltersPopover}
						>
							Дополнительные фильтры
						</S.AdditionalFiltersButton>

						<S.FiltersButton open={isFiltersPopoverOpen} onClick={openFiltersPopover}>
							<GearIcon />
						</S.FiltersButton>

						<Button>
							<PlusIcon />
						</Button>
					</S.ButtonsGroup>
				</S.Filters>
			</FormProvider>

			<FiltersPopover
				open={isFiltersPopoverOpen}
				anchorEl={filtersPopoverAnchorEl}
				onClose={closeFiltersPopover}
			/>

			<AdditionalFiltersPopover
				open={isAdditionalFiltersPopoverOpen}
				anchorEl={additionalFiltersPopoverAnchorEl}
				onClose={closeAdditionalFiltersPopover}
			/>
		</>
	)
}
