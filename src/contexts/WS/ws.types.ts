import { ReactNode } from 'react'

export type Command = 'subscribe' | 'unsubscribe' | 'update'
export type Block = 'contragent'

export interface Send<T> {
	command: Command
	block: Block
	id: number
	data?: T
}

export interface WSProviderProps {
	hash: string
	id: string
	children: ReactNode
}

export interface WSContextProps {
	ws: WebSocket
	send: <T extends {}>(props: Send<T>) => void
}
