import { FC, PropsWithChildren } from 'react'

import * as S from './FormSection.styled'

import DownloadIcon from 'public/icons/download.svg'

interface FormSectionProps {
	label: string
	divider?: boolean
	download?: boolean
}

export const FormSection: FC<PropsWithChildren<FormSectionProps>> = ({ children, label, download, divider = true }) => {
	return (
		<S.FormSection>
			<S.Label>
				<span>{label}</span>

				{download ? (
					<button type="button">
						<DownloadIcon />
					</button>
				) : null}
			</S.Label>

			{divider ? <S.Divider /> : null}

			<S.Content>{children}</S.Content>
		</S.FormSection>
	)
}
