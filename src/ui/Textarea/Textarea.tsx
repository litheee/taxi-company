import InputLabel from '@mui/material/InputLabel'
import { TextareaAutosizeProps } from '@mui/material/TextareaAutosize'

import * as S from './Textarea.styled'

interface TextareaProps extends TextareaAutosizeProps {
	label?: string
}

export const Textarea = ({ label, name, ...props }: TextareaProps) => {
	return (
		<S.TextareaContainer>
			{label && <InputLabel htmlFor={name}>{label}</InputLabel>}

			<S.Textarea id={name} {...props} />
		</S.TextareaContainer>
	)
}
