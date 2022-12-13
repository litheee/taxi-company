import { Fragment } from 'react'
import {
	flexRender,
	Row,
	RowData,
	TableOptions,
	useReactTable
} from '@tanstack/react-table'

import { Pagination } from 'components/common'

import * as S from './Table.styled'

import SortIcon from 'public/icons/sort.svg'

interface TableProps<TData> {
	noPagination?: boolean
	options: TableOptions<TData>
	renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement
	onRowClick?: (row: Row<TData>) => void
}

export const Table = <TData extends RowData>({
	noPagination = false,
	options,
	renderSubComponent,
	onRowClick
}: TableProps<TData>) => {
	const table = useReactTable<TData>(options)

	return (
		<S.TableContainer>
			<S.Table>
				<S.TableHead>
					{table.getHeaderGroups().map((headerGroup) => (
						<S.TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								const sortable = Boolean(options.state?.sorting)
								const isColumnSortable =
									typeof header.column.columnDef.enableSorting === 'undefined'

								return (
									<S.TableCell key={header.id} sortable={sortable}>
										<span>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}

											{sortable && isColumnSortable && header.id !== 'actions' ? (
												<S.SortButton>
													<SortIcon />
												</S.SortButton>
											) : null}
										</span>
									</S.TableCell>
								)
							})}
						</S.TableRow>
					))}
				</S.TableHead>

				<S.TableBody>
					{table.getRowModel().rows.map((row) => {
						return (
							<Fragment key={row.id}>
								<S.TableRow
									onClick={() => {
										row.toggleExpanded()

										if (onRowClick) {
											onRowClick(row)
										}
									}}
								>
									{row.getVisibleCells().map((cell) => (
										<S.TableCell key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</S.TableCell>
									))}
								</S.TableRow>

								{renderSubComponent && row.getIsExpanded()
									? renderSubComponent({ row })
									: null}
							</Fragment>
						)
					})}
				</S.TableBody>
			</S.Table>

			{!noPagination ? (
				<Pagination
					page={table.getState().pagination.pageIndex + 1}
					pageCount={table.getPageCount()}
					onPrev={() => {}}
					onNext={() => {}}
					onLast={() => {}}
				/>
			) : null}
		</S.TableContainer>
	)
}
