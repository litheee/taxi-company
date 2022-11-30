import { useState } from 'react'
import { PopoverProps } from '@mui/material/Popover'

import { Button, Checkbox, Textarea, TextField, Switch } from 'ui'
import { BankAccountField, BankCardField, BikField, CorporateAccountField, InnField, KppField } from 'ui/maskedFields'

import * as S from './AddRequisitesPopover.styled'

export const AddRequisitesPopover = (props: PopoverProps) => {
	const [vat, setVat] = useState(true)
	const [activeTab, setActiveTab] = useState(0)

	const tabs = ['Карта', 'Реквизиты']

	const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setActiveTab(newValue)
	}

	const tabItems = tabs.map((label) => {
		return <S.Tab key={label} label={label} />
	})

	return (
		<S.AddRequisitesPopover
			{...props}
			heading="Добавление карты/реквезитов"
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			transformOrigin={{ horizontal: 'left', vertical: 'top' }}
		>
			<S.Tabs
				value={activeTab}
				onChange={onTabChange}
				TabIndicatorProps={{
					sx: {
						display: 'block'
					}
				}}
			>
				{tabItems}
			</S.Tabs>

			{activeTab === 0 ? (
				<S.Form>
					<TextField label="Название" placeholder="Введите название" />

					<BankCardField />

					<Checkbox label="Сделать основной" />

					<Button fullWidth color="blue">
						Сохранить
					</Button>
				</S.Form>
			) : (
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
			)}
		</S.AddRequisitesPopover>
	)
}
