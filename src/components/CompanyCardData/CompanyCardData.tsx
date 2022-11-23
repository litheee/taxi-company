import { AvatarUpload, Section } from 'common'
import { TextField, Textarea } from 'ui'

import * as S from './CompanyCardData.styled'

import CompanyIcon from 'public/icons/company.svg'
import DownloadIcon from 'public/icons/download.svg'

export const CompanyCardData = () => {
	return (
		<S.CompanyCardData>
			<form>
				<S.FormColumn>
					<AvatarUpload icon={<CompanyIcon />} />

					<Textarea placeholder="Укажите полное название Юр.лица/ИП" />

					<Section label="Основное">
						<Textarea label="Юридический адрес проживания" placeholder="Введите данные" />

						<S.FieldsRow>
							<TextField label="ИНН" placeholder="_ _ _ _ _ _ _ _ _ _" />
							<TextField label="КПП" placeholder="_ _ _ _ _ _ _ _ _" />
						</S.FieldsRow>

						<TextField label="ОГРН" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _" />
					</Section>

					<Section label="Комментарии">
						<Textarea placeholder="Написать комментарий" />
					</Section>
				</S.FormColumn>

				<S.Divider />

				<S.FormColumn>
					<Section label="Информация">
						<Textarea label="Адрес офиса юр. лица" placeholder="Введите данные" />

						<TextField label="ФИО гендиректора" placeholder="Введите данные" />

						<S.FieldsRow>
							<TextField label="Телефон гендиректора" placeholder="+7 (___) ___ __ __" />
							<TextField label="Телефон офиса" placeholder="+7 (___) ___ __ __" />
						</S.FieldsRow>

						<TextField label="Адрес электронной почты" placeholder="Введите данные" />

						<TextField label="Сфера деятельности" placeholder="Введите данные" />
					</Section>

					<Section
						label="Документы"
						endAdornment={
							<button>
								<DownloadIcon />
							</button>
						}
					></Section>
				</S.FormColumn>
			</form>
		</S.CompanyCardData>
	)
}
