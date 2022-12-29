import { createContext, useEffect, useMemo, useRef, useState } from 'react'

import { Send, WSProviderProps, WSContextProps } from './ws.types'

export const WSContext = createContext<WSContextProps>({} as WSContextProps)

export const WSProvider = ({ children }: WSProviderProps): JSX.Element => {
	const ws = useRef<WebSocket>()

	const [isReady, setIsReady] = useState(false)
	const [connectData, setConnectData] = useState({ hash: '', id: '' })
	const { hash, id } = connectData

	useEffect(() => {
		if (!hash || !id) return

		const socket = new WebSocket('wss://taxivoshod.ru:9999')

		socket.onopen = () => {
			ws.current = socket
			socket.send(JSON.stringify({ command: 'authorize', hash, id }))
			setIsReady(true)
		}

		socket.onmessage = (event) => {
			console.log('data', JSON.parse(event.data))
		}

		socket.onclose = () => {
			if (!ws.current) return

			setIsReady(false)
			ws.current.close()
			console.log('ws closed')
		}

		// return () => {
		// 	ws.current?.close()
		// }
	}, [hash, id])

	const send = <T extends {}>({ command, block, hash, id, data, field }: Send<T>) => {
		if (ws.current) {
			ws.current.send(JSON.stringify({ command, block, hash, id, data, field }))
		}
	}

	const disconnect = () => {
		if (!ws.current) return

		ws.current.close()
		ws.current = undefined
	}

	const connect = (hash: string, id: string) => {
		setConnectData({ hash, id })
	}

	const value: WSContextProps = useMemo(
		() => ({
			instance: ws.current,
			isReady,
			send,
			connect,
			disconnect
		}),
		[isReady]
	)

	return <WSContext.Provider value={value}>{children}</WSContext.Provider>
}
