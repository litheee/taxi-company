import { ReactNode } from 'react'

export type Command = 'subscribe' | 'unsubscribe'
export type Block = 'contragent'

export interface Send {
	command: Command
	block: Block
	id: number
}

export interface WSProviderProps {
	hash: string
	id: string
	children: ReactNode
}

export interface WSContextProps {
	send: (props: Send) => void
	onmessage: ((this: WebSocket, ev: MessageEvent<any>) => any) | null
}
