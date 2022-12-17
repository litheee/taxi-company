import { createContext, useEffect, useMemo } from 'react'

import { Send, WSProviderProps, WSContextProps } from './ws.types'

export const WSContext = createContext<WSContextProps>({} as WSContextProps)

export const WSProvider = ({ hash, id, children }: WSProviderProps): JSX.Element => {
	const ws = useMemo(() => new WebSocket('wss://taxivoshod.ru:9999'), [])

	ws.onopen = () => {
		ws.send(JSON.stringify({ command: 'authorize', hash, id }))
	}

	ws.onmessage = (event) => {
		const data = JSON.parse(event.data)
		console.log('data', data)
	}

	// useEffect(() => {
	// 	return () => ws.close()
	// }, [ws])

	const send = ({ command, block, id }: Send) => {
		ws.send(JSON.stringify({ command, block, id }))
	}

	const value: WSContextProps = {
		send,
		onmessage: ws.onmessage
	}

	return <WSContext.Provider value={value}>{children}</WSContext.Provider>
}
