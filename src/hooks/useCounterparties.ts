import { useCallback, useEffect } from 'react'
import { useWS } from './useWS'

export const useCounterparties = () => {
	const ws = useWS()

	const subscribe = useCallback(() => {
		ws.send({ command: 'subscribe', block: 'contragent', id: 4549 })
	}, [ws])

	const unsubscribe = useCallback(() => {
		ws.send({ command: 'unsubscribe', block: 'contragent', id: 4549 })
	}, [ws])

	useEffect(() => {
		subscribe()

		// return () => unsubscribe()
	}, [])

	// return {
	// 	subscribe,
	// 	unsubscribe
	// }
}
