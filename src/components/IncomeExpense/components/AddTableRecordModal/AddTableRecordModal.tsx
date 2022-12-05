import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
	ColumnDef,
	createColumnHelper,
	getCoreRowModel,
	RowData,
	SortingState
} from '@tanstack/react-table'

import { Heading, SearchField } from 'components/common'
import {
	Button,
	DatePicker,
	InputLabel,
	Select,
	Textarea,
	Table,
	TextField
} from 'ui'

import * as S from './AddTableRecordModal.styled'

import DownloadIcon from 'public/icons/download.svg'
import PlusIcon from 'public/icons/plus.svg'

declare module '@tanstack/react-table' {
	interface TableMeta<TData extends RowData> {
		updateData: (rowIndex: number, columnId: string, value: unknown) => void
	}
}

interface TableRecord {
	number: string
	category: string
	sum: string
	quantity: string
}

interface IncomeExpenseAddTableRecordModalProps {
	open: boolean
	onClose: () => void
}

const defaultColumn: Partial<ColumnDef<TableRecord>> = {
	cell: ({ getValue, row: { index }, column: { id, columnDef }, table }) => {
		const initialValue = getValue()
		// eslint-disable-next-line
		const [value, setValue] = useState(initialValue)

		const onBlur = () => {
			table.options.meta?.updateData(index, id, value)
		}

		// eslint-disable-next-line
		useEffect(() => {
			setValue(initialValue)
		}, [initialValue])

		return id !== 'quantity' ? (
			<TextField name={id} placeholder={columnDef.header as string} />
		) : (
			<S.TableAddRow>
				<TextField name={id} placeholder={columnDef.header as string} />

				<Button color="blue">
					<PlusIcon />
				</Button>
			</S.TableAddRow>
		)
		// return <input value={value as string} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />
	}
}

export const IncomeExpenseAddTableRecordModal = (
	props: IncomeExpenseAddTableRecordModalProps
) => {
	const useFormProps = useForm()
	const [recordType, setRecordType] = useState(0)
	const [date, setDate] = useState<Date | null>(null)
	const [sorting, setSorting] = useState<SortingState>([])

	const columnHelper = createColumnHelper<TableRecord>()

	const columns = [
		columnHelper.accessor('number', {
			header: 'Номер'
		}),
		columnHelper.accessor('category', {
			header: 'Категория'
		}),
		columnHelper.accessor('sum', {
			header: 'Сумма'
		}),
		columnHelper.accessor('quantity', {
			header: 'Кол-во'
		})
	]

	const tabs = ['Приход', 'Расход']

	const tableOptions = {
		data: [
			{
				number: '',
				category: '',
				sum: '',
				quantity: ''
			}
		],
		columns,
		state: {
			sorting
		},
		defaultColumn,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting
	}

	const categories = [
		{ label: 'Категория 1', value: 'Категория 1' },
		{ label: 'Категория 2', value: 'Категория 2' },
		{ label: 'Категория 3', value: 'Категория 3' }
	]

	const statuses = [
		{ label: 'Статус 1', value: 'Статус 1' },
		{ label: 'Статус 2', value: 'Статус 2' },
		{ label: 'Статус 3', value: 'Статус 3' }
	]

	const tabItems = tabs.map((label) => {
		return <S.Tab key={label} label={label} />
	})

	const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setRecordType(newValue)
	}

	return (
		<S.IncomeExpenseAddTableRecordModal variant={2} {...props}>
			<>
				<Heading
					variant="h2"
					endAdornment={
						<S.Tabs
							value={recordType}
							onChange={onTabChange}
							TabIndicatorProps={{
								sx: {
									display: 'block'
								}
							}}
						>
							{tabItems}
						</S.Tabs>
					}
				>
					Добавление статьи
				</Heading>

				<S.Divider orientation="horizontal" />

				<FormProvider {...useFormProps}>
					<S.Form>
						<S.ColumnsRow>
							<S.FormColumn>
								<DatePicker selected={date} onChange={setDate} />

								<Select
									name="category"
									label="Категория операции"
									placeholder="Выберите категорию"
									options={categories}
								/>

								<S.Divider orientation="horizontal" />

								<SearchField
									name="counterparty"
									label="Контрагент"
									placeholder="Выберите контрагента"
								/>

								<Textarea
									name="comment"
									label="Комментарии"
									placeholder="Написать комментарий"
								/>

								<Select
									name="status"
									label="Статус"
									placeholder="Выберите статус"
									options={statuses}
								/>

								<InputLabel>Документы</InputLabel>

								<Button startIcon={<DownloadIcon fill="#fff" />}>
									Загрузить
								</Button>
							</S.FormColumn>

							<S.Divider />

							<S.FormColumn>
								<Table noPagination options={tableOptions} />
							</S.FormColumn>
						</S.ColumnsRow>

						<Button fullWidth color="green">
							Добавить
						</Button>
					</S.Form>
				</FormProvider>
			</>
		</S.IncomeExpenseAddTableRecordModal>
	)
}
