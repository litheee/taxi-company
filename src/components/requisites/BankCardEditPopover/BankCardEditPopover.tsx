import { PopoverProps } from '@mui/material/Popover'

import { Button, Checkbox, TextField } from 'ui'
import { BankCardField } from 'ui/maskedFields'

import * as S from './BankCardEditPopover.styled'

export const BankCardEditPopover = (props: PopoverProps) => {
	return (
		<S.BankCardEditPopover
			{...props}
			heading="Карта №123"
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			transformOrigin={{ horizontal: 'left', vertical: 'top' }}
		>
			<S.Form>
				<TextField label="Название" placeholder="Введите название" />

				<BankCardField />

				<Checkbox label="Сделать основной" />

				<Button fullWidth color="blue">
					Сохранить
				</Button>
			</S.Form>
		</S.BankCardEditPopover>
	)
}
