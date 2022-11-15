import Image from 'next/image'

import * as S from './UserProfile.styled'

import ArrowDownIcon from 'public/icons/arrow-down.svg'
import avatarImg from 'public/img/avatar.png'

export const UserProfile = () => (
	<S.UserProfile>
		<Image src={avatarImg} alt="Пользователь" />

		<span>Хабибаржалаев Нурмагомед</span>

		<button>
			<ArrowDownIcon />
		</button>
	</S.UserProfile>
)
