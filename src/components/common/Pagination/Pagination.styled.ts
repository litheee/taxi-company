import styled from '@emotion/styled'

export const Pagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
`

export const PaginationButton = styled.button`
	opacity: 0.2;
`

export const FirstPageButton = styled(PaginationButton)`
	transform: rotate(180deg);
`

export const PrevButton = styled(PaginationButton)`
	transform: rotate(90deg);
`

export const NextButton = styled(PaginationButton)`
	transform: rotate(-90deg);
`

export const LastPageButton = styled(PaginationButton)``

export const Pages = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`

export const CurrentPage = styled.div`
	padding: 2px 6px;
	background: var(--color-gray-200);
	border-radius: 2px;
`

export const PagesNumber = styled.div`
	color: var(--color-gray-100);
`
