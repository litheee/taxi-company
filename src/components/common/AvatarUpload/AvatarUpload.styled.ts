import styled from '@emotion/styled'

import { Button } from 'ui/Button/Button.styled'

export const AvatarUpload = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 140px;
	height: 140px;
	border-radius: 50%;
	background: var(--color-gray-200);
	box-shadow: 1px 2px 7px rgba(99, 99, 99, 0.2);

	${Button} {
		position: absolute;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		min-width: auto;
		width: 34px;
		height: 34px;
		padding: 0;
		border-radius: 50%;
	}
`

export const Icon = styled.div``
