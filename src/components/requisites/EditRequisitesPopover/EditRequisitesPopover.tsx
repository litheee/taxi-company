import { useState } from 'react'
import { PopoverProps } from '@mui/material/Popover'

import { Button, Checkbox, Textarea, TextField, Switch } from 'ui'
import { BikField, BankAccountField, InnField, KppField, CorporateAccountField } from 'ui/maskedFields'

import * as S from './EditRequisitesPopover.styled'

export const EditRequisitesPopover = (props: PopoverProps) => {
	const [vat, setVat] = useState(true)

	return (
		<S.EditRequisitesPopover
			{...props}
			heading="Счёт *1234"
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			transformOrigin={{ horizontal: 'left', vertical: 'top' }}
		>
			<S.Form>
				<TextField label="Название" placeholder="Введите название" />
				<BikField />
				<BankAccountField />
				<CorporateAccountField />

				<S.FieldsRow>
					<InnField />
					<KppField />
				</S.FieldsRow>

				<Textarea label="Обоснование" />

				<S.VatRow>
					<span>НДС</span>

					<S.VatSwitch>
						<S.VatValue active={!vat}>Нет</S.VatValue>

						<Switch
							value={vat}
							defaultChecked={vat}
							onChange={(e, checked) => {
								setVat(checked)
							}}
						/>

						<S.VatValue active={vat}>Да</S.VatValue>
					</S.VatSwitch>
				</S.VatRow>

				<Checkbox label="Сделать основной" />

				<Button fullWidth color="green">
					Сохранить
				</Button>
			</S.Form>
		</S.EditRequisitesPopover>
	)
}
