import LoupeIcon from 'public/icons/loupe.svg'

import * as S from './SearchField.styled'

export const SearchField = ({ ...props }) => (
	<S.SearchField>
		<S.SearchFieldInput {...props} />

		<S.ButtonIcon>
			<LoupeIcon />
		</S.ButtonIcon>
	</S.SearchField>
)
