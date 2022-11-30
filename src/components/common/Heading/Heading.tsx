import { FC, PropsWithChildren } from 'react'

import { Variant } from 'styled/components/Text'

import * as S from './Heading.styled'

interface HeadingProps {
	variant?: Variant
	tag?: React.ElementType
	endAdornment?: JSX.Element
}

export const Heading: FC<PropsWithChildren<HeadingProps>> = ({ children, variant = 'body1', tag, endAdornment }) => {
	const getTag = (variant: Variant) => {
		if (variant === 'body1' || variant === 'body2') {
			return 'p'
		}

		return variant
	}

	return (
		<S.Heading>
			{typeof children === 'string' ? (
				<S.Text variant={variant} as={tag || getTag(variant)}>
					{children}
				</S.Text>
			) : (
				children
			)}

			{endAdornment ? <S.EndAdornment>{endAdornment}</S.EndAdornment> : null}
		</S.Heading>
	)
}
