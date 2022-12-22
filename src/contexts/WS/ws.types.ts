import { ReactNode } from 'react'

export type Command = 'subscribe' | 'unsubscribe' | 'update' | 'authorize'
export type Block = 'contragent'

export interface Send<T> {
	command: Command
	block?: Block
	id: number | string
	hash?: string
	data?: T
}

export interface WSProviderProps {
	children: ReactNode
}

export interface WSContextProps {
	instance: WebSocket | undefined
	isReady: boolean
	send: <T extends {}>(props: Send<T>) => void
	connect: (hash: string, id: string) => void
	disconnect: () => void
}
