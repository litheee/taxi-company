import styled from '@emotion/styled'

import { Divider } from 'styled/components'

import { Heading } from 'components/common/Heading/Heading.styled'

export { Divider }

export const Section = styled.div`
	width: 100%;

	${Heading} {
		margin-bottom: 5px;
	}

	${Divider} {
		box-shadow: 0px 0px 20px rgba(37, 37, 37, 0.4);
		margin-bottom: 15px;
	}
`

export const Content = styled.div`
	width: 100%;

	& > *:not(:last-child) {
		margin-bottom: 15px;
	}
`
