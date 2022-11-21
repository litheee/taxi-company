import { MouseEvent, useState } from 'react'

import { CarsTable } from 'components'

import * as S from 'styled/components/CarPopover'

const CarsTablePage = () => {
	const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLButtonElement | null>(null)

	const openPopover = (event: MouseEvent<HTMLButtonElement>) => {
		setPopoverAnchorEl(event.currentTarget)
	}

	const closePopover = () => {
		setPopoverAnchorEl(null)
	}

	return (
		<>
			<button onClick={openPopover} onLoad={openPopover}>
				Открыть
			</button>

			<S.CarPopover open={Boolean(popoverAnchorEl)} anchorEl={popoverAnchorEl} onClose={closePopover}>
				<CarsTable />
			</S.CarPopover>
		</>
	)
}

export default CarsTablePage
