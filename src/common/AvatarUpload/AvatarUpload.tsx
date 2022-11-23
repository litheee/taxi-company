import { Button } from 'ui'

import * as S from './AvatarUpload.styled'

import PenIcon from 'public/icons/pen.svg'

interface AvatarUploadProps {
	icon: React.ReactNode
}

export const AvatarUpload = ({ icon }: AvatarUploadProps) => {
	return (
		<S.AvatarUpload>
			<S.Icon>{icon}</S.Icon>

			<Button color="blue">
				<PenIcon />
			</Button>
		</S.AvatarUpload>
	)
}
