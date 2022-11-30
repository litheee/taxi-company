import { AvatarUpload, Section } from 'components/common'
import { TextField, Textarea } from 'ui'
import { InnField, KppField, OgrnField, PhoneField } from 'ui/maskedFields'

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
							<InnField />
							<KppField />
						</S.FieldsRow>

						<OgrnField label="ОГРН" />
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
							<PhoneField label="Телефон гендиректора" maskType={2} />
							<PhoneField label="Телефон офиса" maskType={2} />
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
