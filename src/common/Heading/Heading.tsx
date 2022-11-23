import { FC, PropsWithChildren } from 'react'

import * as S from './Heading.styled'

interface HeadingProps {
	endAdornment?: JSX.Element
}

export const Heading: FC<PropsWithChildren<HeadingProps>> = ({ children, endAdornment }) => {
	return (
		<S.Heading>
			<span>{children}</span>

			{endAdornment ? <S.EndAdornment>{endAdornment}</S.EndAdornment> : null}
		</S.Heading>
	)
}
