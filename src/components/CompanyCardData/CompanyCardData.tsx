import { FormProvider, useForm } from 'react-hook-form'

import { AvatarUpload, Section } from 'components/common'
import { TextField, Textarea } from 'ui'
import { InnField, KppField, OgrnField, PhoneField } from 'ui/maskedFields'

import * as S from './CompanyCardData.styled'

import CompanyIcon from 'public/icons/company.svg'
import DownloadIcon from 'public/icons/download.svg'

export const CompanyCardData = () => {
	const useFormProps = useForm()

	return (
		<FormProvider {...useFormProps}>
			<S.CompanyCardData>
				<S.FormColumn>
					<AvatarUpload icon={<CompanyIcon />} />

					<Textarea
						name="organizationFullName"
						placeholder="Укажите полное название Юр.лица/ИП"
					/>

					<Section label="Основное">
						<Textarea
							name="legalAddress"
							label="Юридический адрес проживания"
							placeholder="Введите данные"
						/>

						<S.FieldsRow>
							<InnField name="inn" />
							<KppField name="kpp" />
						</S.FieldsRow>

						<OgrnField name="ogrn" label="ОГРН" />
					</Section>

					<Section label="Комментарии">
						<Textarea name="comment" placeholder="Написать комментарий" />
					</Section>
				</S.FormColumn>

				<S.Divider />

				<S.FormColumn>
					<Section label="Информация">
						<Textarea
							name="officeLegalAddress"
							label="Адрес офиса юр. лица"
							placeholder="Введите данные"
						/>

						<TextField
							name="ceoFullName"
							label="ФИО гендиректора"
							placeholder="Введите данные"
						/>

						<S.FieldsRow>
							<PhoneField
								name="ceoPhone"
								label="Телефон гендиректора"
								maskType={2}
							/>
							<PhoneField
								name="ceoOfficePhone"
								label="Телефон офиса"
								maskType={2}
							/>
						</S.FieldsRow>

						<TextField
							name="ceoEmail"
							type="email"
							label="Адрес электронной почты"
							placeholder="Введите данные"
						/>

						<TextField
							name="workScrope"
							label="Сфера деятельности"
							placeholder="Введите данные"
						/>
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
			</S.CompanyCardData>
		</FormProvider>
	)
}
