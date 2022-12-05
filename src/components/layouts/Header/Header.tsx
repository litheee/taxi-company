import { FormProvider, useForm } from 'react-hook-form'

import { Clock } from '../Clock/Clock'
import { UserProfile } from '../UserProfile/UserProfile'
import { SearchField } from 'components/common'

import * as S from './Header.styled'

export const Header = () => {
	const useFormProps = useForm()

	return (
		<S.Header>
			<FormProvider {...useFormProps}>
				<SearchField name="search" placeholder="Введите запрос поиск" />
			</FormProvider>

			<Clock />

			<UserProfile />
		</S.Header>
	)
}
