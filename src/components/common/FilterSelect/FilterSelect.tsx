import { useState } from 'react'

import { SelectProps } from 'ui/Select/Select'

import * as S from './FilterSelect.styled'

export const FilterSelect = ({ placeholder, ...props }: SelectProps) => {
	const [open, setOpen] = useState(false)

	const handleClose = () => {
		setOpen(false)
	}

	const handleOpen = () => {
		setOpen(true)
	}

	return (
		<S.FilterSelect
			open={open}
			onClose={handleClose}
			onOpen={handleOpen}
			MenuProps={{
				disablePortal: true
			}}
			placeholder={placeholder}
			renderValue={(value) => {
				if (!props.options) return <>{value}</>

				const label = props.options.find(({ value: v }) => v === value)?.label

				return (
					<>
						<S.Placeholder>{placeholder}</S.Placeholder>
						{label}
					</>
				)
			}}
			{...props}
		/>
	)
}
