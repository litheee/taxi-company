import { flexRender, Table as ReactTableProps } from '@tanstack/react-table'

import { Pagination } from 'components/common'

import * as S from './Table.styled'

import SortIcon from 'public/icons/sort.svg'

interface TableProps {
	table: ReactTableProps<any>
}

export const Table = ({ table }: TableProps) => {
	return (
		<S.TableContainer>
			<S.Table>
				<S.TableHead>
					{table.getHeaderGroups().map((headerGroup) => (
						<S.TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								const sortable = table.options.enableSorting

								return (
									<S.TableCell key={header.id} sortable={sortable}>
										<span>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}

											{sortable && header.id !== 'actions' ? (
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
							<S.TableRow key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<S.TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</S.TableCell>
								))}
							</S.TableRow>
						)
					})}
				</S.TableBody>
			</S.Table>

			<Pagination
				page={table.getState().pagination.pageIndex + 1}
				pageCount={table.getPageCount()}
				onPrev={() => {}}
				onNext={() => {}}
				onLast={() => {}}
			/>
		</S.TableContainer>
	)
}
