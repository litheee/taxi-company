import { useState } from 'react'
import { PopoverProps } from '@mui/material/Popover'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Checkbox, Textarea, TextField, Switch } from 'ui'
import {
	BikField,
	BankAccountField,
	InnField,
	KppField,
	CorporateAccountField
} from 'ui/maskedFields'

import * as S from './EditRequisitesPopover.styled'

export const EditRequisitesPopover = (props: PopoverProps) => {
	const useFormProps = useForm()
	const [vat, setVat] = useState(true)

	return (
		<S.EditRequisitesPopover
			{...props}
			heading="Счёт *1234"
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			transformOrigin={{ horizontal: 'left', vertical: 'top' }}
		>
			<FormProvider {...useFormProps}>
				<S.Form>
					<TextField
						name="name"
						label="Название"
						placeholder="Введите название"
					/>
					<BikField name="bik" />
					<BankAccountField name="bankAccount" />
					<CorporateAccountField name="corporateAccount" />

					<S.FieldsRow>
						<InnField name="inn" />
						<KppField name="kpp" />
					</S.FieldsRow>

					<Textarea name="rationale" label="Обоснование" />

					<S.VatRow>
						<span>НДС</span>

						<S.VatSwitch>
							<S.VatValue active={!vat}>Нет</S.VatValue>

							<Switch
								name=""
								value={vat}
								defaultChecked={vat}
								onChange={(e, checked) => {
									setVat(checked)
								}}
							/>

							<S.VatValue active={vat}>Да</S.VatValue>
						</S.VatSwitch>
					</S.VatRow>

					<Checkbox name="" label="Сделать основной" />

					<Button fullWidth color="green">
						Сохранить
					</Button>
				</S.Form>
			</FormProvider>
		</S.EditRequisitesPopover>
	)
}
