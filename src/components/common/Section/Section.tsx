import { FC, PropsWithChildren } from 'react'

import { Heading } from 'components/common'

import * as S from './Section.styled'

interface SectionProps {
	label?: string
	divider?: boolean
	endAdornment?: JSX.Element
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({ children, label, divider = true, endAdornment }) => {
	return (
		<S.Section>
			{label ? <Heading endAdornment={endAdornment}>{label}</Heading> : null}

			{divider ? <S.Divider orientation="horizontal" /> : null}

			<S.Content>{children}</S.Content>
		</S.Section>
	)
}
