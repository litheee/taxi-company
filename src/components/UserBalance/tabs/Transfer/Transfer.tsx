import { FormProvider, useForm } from 'react-hook-form'

import { TextField, Select, Button } from 'ui'

import * as S from './Transfer.styled'

import ArrowRightIcon from 'public/icons/arrow-right.svg'

export const TransferTab = () => {
	const useFormProps = useForm()

	const balances = [
		{ label: 'Депозит', value: 'Депозит' },
		{ label: 'Внутренний', value: 'Внутренний' },
		{ label: 'Яндекс', value: 'Яндекс' }
	]

	return (
		<FormProvider {...useFormProps}>
			<S.TransferTab>
				<TextField
					type="number"
					name="depositAmount"
					placeholder="Введите сумму"
				/>

				<S.FieldsRow>
					<Select
						name="balanceFrom"
						defaultValue="Депозит"
						placeholder="Откуда"
						options={balances}
					/>

					<S.ArrowIcon>
						<ArrowRightIcon />
					</S.ArrowIcon>

					<Select
						name="balanceTo"
						defaultValue="Внутренний"
						placeholder="Куда"
						options={balances}
					/>
				</S.FieldsRow>

				<Button color="green" fullWidth>
					Перевести
				</Button>
			</S.TransferTab>
		</FormProvider>
	)
}
