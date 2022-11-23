import { flexRender, Table as ReactTableProps } from '@tanstack/react-table'

import * as S from './Table.styled'

import SortIcon from 'public/icons/sort.svg'
import ArrowDownIcon from 'public/icons/arrow-down.svg'
import ArrowDoubleRightIcon from 'public/icons/arrow-double-right.svg'

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

											{sortable ? (
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
					{table.getRowModel().rows.map((row) => (
						<S.TableRow key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<S.TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</S.TableCell>
							))}
						</S.TableRow>
					))}
				</S.TableBody>
			</S.Table>

			<S.Pagination>
				<S.FirstPageButton>
					<ArrowDoubleRightIcon />
				</S.FirstPageButton>

				<S.PrevButton>
					<ArrowDownIcon />
				</S.PrevButton>

				<S.Pages>
					<S.CurrentPage>{table.getState().pagination.pageIndex + 1}</S.CurrentPage>

					<S.PagesNumber>из {table.getPageCount()}</S.PagesNumber>
				</S.Pages>

				<S.NextButton>
					<ArrowDownIcon />
				</S.NextButton>

				<S.LastPageButton>
					<ArrowDoubleRightIcon />
				</S.LastPageButton>
			</S.Pagination>
		</S.TableContainer>
	)
}
