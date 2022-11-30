import { SelectProps } from 'ui/Select/Select'

import * as S from './FilterSelect.styled'

export const FilterSelect = ({ placeholder, ...props }: SelectProps) => {
	return (
		<S.FilterSelect
			{...props}
			// MenuProps={{
			// 	PaperProps: {
			// 		className: 'filter-select-paper'
			// 	}
			// }}
			placeholder={placeholder}
			renderValue={(value: any) => {
				return (
					<>
						<S.Placeholder>{placeholder}</S.Placeholder>
						{value}
					</>
				)
			}}
		/>
	)
}
