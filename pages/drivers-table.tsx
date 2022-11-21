import { MouseEvent, useState } from 'react'

import { DriversTable } from 'components'

import * as S from 'styled/components/DriversPopover'

const DriversTablePage = () => {
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

			<S.DriversPopover open={Boolean(popoverAnchorEl)} anchorEl={popoverAnchorEl} onClose={closePopover}>
				<DriversTable />
			</S.DriversPopover>
		</>
	)
}

export default DriversTablePage
