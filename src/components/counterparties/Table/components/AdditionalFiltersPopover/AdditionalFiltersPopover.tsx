import { PopoverProps } from '@mui/material/Popover'
import { FormProvider, useForm } from 'react-hook-form'

import { Heading, Section } from 'components/common'
import { Button, Checkbox, InputMask, Select, TextField } from 'ui'

import * as S from './AdditionalFiltersPopover.styled'

export const AdditionalFiltersPopover = ({
	open,
	anchorEl,
	onClose
}: PopoverProps) => {
	const useFormProps = useForm()

	const options = [
		{ label: '1', value: 1 },
		{ label: '2', value: 2 },
		{ label: '3', value: 3 }
	]

	return (
		<S.AdditionalFiltersPopover
			open={open}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			onClose={onClose}
		>
			<FormProvider {...useFormProps}>
				<form>
					<S.FormContent>
						<S.FormColumn>
							<Heading>Числа</Heading>
							<S.FieldsRow>
								<TextField name="numbersFrom" type="number" placeholder="от" />
								<TextField name="numbersTo" type="number" placeholder="до" />
							</S.FieldsRow>

							<Heading>Адрес электронной почты</Heading>
							<Section divider={false}>
								<Checkbox name="" label="Парковый автомобиль" />
								<Checkbox name="" label="Парковый автомобиль" />
								<Checkbox name="" label="Парковый автомобиль" />
							</Section>

							<Heading>Адрес электронной почты</Heading>
							<Section divider={false}>
								<S.CheckboxGrid>
									<Checkbox name="" label="Чекбокс" />
									<Checkbox name="" label="Чекбокс" />
									<Checkbox name="" label="Чекбокс" />
									<Checkbox name="" label="Чекбокс" />
								</S.CheckboxGrid>
							</Section>
						</S.FormColumn>

						<S.Divider />

						<S.FormColumn>
							<Heading>Выпадающий список</Heading>
							<Section divider={false}>
								<Select name="choice" placeholder="Выбрать" options={options} />
							</Section>

							<Section label="" divider={false}>
								<S.FieldsRow>
									<InputMask
										name="field"
										label="Поле"
										maskProps={{ mask: '9 999 99' }}
									/>

									<Select
										name="list"
										label="Список"
										placeholder="123"
										options={options}
									/>
								</S.FieldsRow>
							</Section>
						</S.FormColumn>
					</S.FormContent>

					<Button
						color="green"
						fullWidth
						onClick={(e) => onClose && onClose(e, 'backdropClick')}
					>
						Закончить
					</Button>
				</form>
			</FormProvider>
		</S.AdditionalFiltersPopover>
	)
}
