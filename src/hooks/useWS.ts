import { useContext } from 'react'

import { WSContext } from 'contexts'

export const useWS = () => {
	return useContext(WSContext)
}
