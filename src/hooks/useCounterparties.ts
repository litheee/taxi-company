import { useContext } from 'react'

import { CounterpartiesContext } from 'contexts'

export const useCounterparties = () => {
	return useContext(CounterpartiesContext)
}
