import { SelectProps } from 'ui/Select/Select'

import * as S from './FilterSelect.styled'

export const FilterSelect = ({ placeholder, ...props }: SelectProps) => {
	return (
		<S.FilterSelect
			// MenuProps={{
			// 	PaperProps: {
			// 		className: 'filter-select-paper'
			// 	}
			// }}
			placeholder={placeholder}
			renderValue={(value) => {
				const label = props.options.find(({ value: v }) => v === value)?.label

				return (
					<>
						<S.Placeholder>{placeholder}</S.Placeholder>
						{label}
					</>
				)
			}}
			{...props}
		/>
	)
}
