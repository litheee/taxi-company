import { FormProvider, useForm } from 'react-hook-form'

import { CarStatus } from 'components/cars'
import { FilterSelect, FilterText, SearchField } from 'components/common'

import { CAR_STATUSES } from 'constants/carStatuses'
import { CarStatus as CarStatusType } from 'types/car'

import * as S from './Filters.styled'

export const Filters = () => {
	const useFormProps = useForm()

	const brands = [
		{ label: 'Все', value: 'all' },
		{ label: 'Марка 1', value: 'brand1' },
		{ label: 'Марка 2', value: 'brand2' }
	]

	const sort = [
		{ label: 'Возрастание дохода', value: 'profit-asc' },
		{ label: 'Убывание дохода', value: 'profit-desc' }
	]

	return (
		<FormProvider {...useFormProps}>
			<S.Filters>
				<FilterText>Фильтры:</FilterText>

				<FilterSelect
					name="status"
					defaultValue="working"
					options={CAR_STATUSES}
					renderValue={(value) => {
						return (
							<>
								<S.SelectPlaceholder>Статус:</S.SelectPlaceholder>
								<CarStatus status={value as CarStatusType} />
							</>
						)
					}}
				/>

				<FilterSelect
					name="brand"
					placeholder="Марка:"
					options={brands}
					defaultValue="all"
				/>

				<SearchField name="otherAttribute" placeholder="Другой признак" />

				<FilterText>Сортировка:</FilterText>

				<FilterSelect
					name="sort"
					placeholder=""
					options={sort}
					defaultValue="profit-asc"
				/>
			</S.Filters>
		</FormProvider>
	)
}
