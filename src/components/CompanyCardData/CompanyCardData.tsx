import { AvatarUpload, TextField, Textarea, FormSection } from 'ui'

import * as S from './CompanyCardData.styled'

import CompanyIcon from 'public/icons/company.svg'

export const CompanyCardData = () => {
	return (
		<S.CompanyCardData>
			<form>
				<S.FormColumn>
					<AvatarUpload icon={<CompanyIcon />} />

					<Textarea placeholder="Укажите полное название Юр.лица/ИП" />

					<FormSection label="Основное">
						<Textarea label="Юридический адрес проживания" placeholder="Введите данные" />

						<S.Row>
							<TextField label="ИНН" placeholder="_ _ _ _ _ _ _ _ _ _" />
							<TextField label="КПП" placeholder="_ _ _ _ _ _ _ _ _" />
						</S.Row>

						<TextField label="ОГРН" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _" />
					</FormSection>

					<FormSection label="Комментарии">
						<Textarea placeholder="Написать комментарий" />
					</FormSection>
				</S.FormColumn>

				<S.Divider />

				<S.FormColumn>
					<FormSection label="Информация">
						<Textarea label="Адрес офиса юр. лица" placeholder="Введите данные" />

						<TextField label="ФИО гендиректора" placeholder="Введите данные" />

						<S.Row>
							<TextField label="Телефон гендиректора" placeholder="+7 (___) ___ __ __" />
							<TextField label="Телефон офиса" placeholder="+7 (___) ___ __ __" />
						</S.Row>

						<TextField label="Адрес электронной почты" placeholder="Введите данные" />

						<TextField label="Сфера деятельности" placeholder="Введите данные" />
					</FormSection>

					<FormSection label="Документы" download></FormSection>
				</S.FormColumn>
			</form>
		</S.CompanyCardData>
	)
}
