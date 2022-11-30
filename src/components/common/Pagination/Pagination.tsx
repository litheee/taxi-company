import * as S from './Pagination.styled'

import ArrowDownIcon from 'public/icons/arrow-down.svg'
import ArrowDoubleRightIcon from 'public/icons/arrow-double-right.svg'

interface PaginationProps {
	page: number
	pageCount: number
	onPrev: () => void
	onNext: () => void
	onLast: () => void
}

export const Pagination = ({ page, pageCount, onPrev, onNext, onLast }: PaginationProps) => {
	return (
		<S.Pagination>
			{/* <S.FirstPageButton>
				<ArrowDoubleRightIcon />
			</S.FirstPageButton> */}

			<S.PrevButton onClick={onPrev}>
				<ArrowDownIcon />
			</S.PrevButton>

			<S.Pages>
				<S.CurrentPage>{page}</S.CurrentPage>

				<S.PagesNumber>из {pageCount}</S.PagesNumber>
			</S.Pages>

			<S.NextButton onClick={onNext}>
				<ArrowDownIcon />
			</S.NextButton>

			<S.LastPageButton onClick={onLast}>
				<ArrowDoubleRightIcon />
			</S.LastPageButton>
		</S.Pagination>
	)
}
