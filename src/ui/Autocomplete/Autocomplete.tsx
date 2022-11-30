import MuiAutocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'

import * as S from './Autocomplete.styled'

export const Autocomplete = <
	T,
	Multiple extends boolean | undefined,
	DisableClearable extends boolean | undefined,
	FreeSolo extends boolean | undefined
>(
	props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
) => {
	return (
		<S.Autocomplete>
			<MuiAutocomplete<T, Multiple, DisableClearable, FreeSolo>
				openOnFocus
				disablePortal
				loadingText="Загрузка..."
				noOptionsText="Ничего не найдено"
				PaperComponent={S.Paper}
				{...props}
			/>
		</S.Autocomplete>
	)
}
