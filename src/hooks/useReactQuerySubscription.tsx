import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'

export const useReactQuerySubscription = () => {
	const queryClient = useQueryClient()

	useEffect(() => {
		const websocket = new WebSocket('wss://taxivoshod.ru:9999')

		websocket.onopen = () => {
			console.log('connected')
		}

		websocket.onmessage = (event) => {
			const data = JSON.parse(event.data)
			console.log(data)
			const queryKey = [...data.entity, data.id].filter(Boolean)
			queryClient.invalidateQueries(queryKey)
		}

		return () => {
			websocket.close()
		}
	}, [queryClient])
}
