import { createContext, useEffect, useMemo, useState } from 'react'

import { Send, WSProviderProps, WSContextProps } from './ws.types'

export const WSContext = createContext<WSContextProps>({} as WSContextProps)

export const WSProvider = ({ hash, id, children }: WSProviderProps): JSX.Element => {
	const ws = useMemo(() => new WebSocket('wss://taxivoshod.ru:9999'), [])

	ws.onopen = () => {
		ws.send(JSON.stringify({ command: 'authorize', hash, id }))
	}

	ws.onmessage = (event) => {
		const data = JSON.parse(event.data)

		// console.log('ws', data)
	}

	const send = <T extends {}>({ command, block, id, data }: Send<T>) => {
		ws.send(JSON.stringify({ command, block, id, data }))
	}

	const value: WSContextProps = {
		ws,
		send
	}

	return <WSContext.Provider value={value}>{children}</WSContext.Provider>
}
