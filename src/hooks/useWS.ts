import { useContext, useEffect, useState } from 'react'

import { WSContext } from 'contexts'
import { getObjectsDiffDeep } from 'utils'

import { Block } from 'contexts/WS/ws.types'

interface useWSProps<T> {
	block: Block
	id?: number | string
	transform?: (props: T) => any
	transformRaw?: (props: any) => T
	subscription?: boolean
	listener?: boolean
}

export const useWS = <T>(props: useWSProps<T>) => {
	const {
		block,
		id,
		listener = true,
		subscription = true,
		transform,
		transformRaw
	} = props || {}

	const { isReady, instance, connect, disconnect, send } = useContext(WSContext)

	const [data, setData] = useState<T | undefined>()
	const [focusedFields, setFocusedFields] = useState<string[]>([])
	const [isLoading, setLoading] = useState(Boolean(listener))
	const [isSubscribed, setSubscribed] = useState(false)
	console.log('focusedFields', focusedFields)
	const subscribe = () => {
		send({ command: 'subscribe', block, id })
	}

	const unsubscribe = () => {
		send({ command: 'unsubscribe', block, id })
	}

	const filterValidObjectValues = (object: object) => {
		return Object.fromEntries(
			Object.entries(object).filter(([_, value]) => Boolean(value))
		)
	}

	const getTransformedKeys = (names: string[], transformFn: (props: any) => any) => {
		const namesObj = names
			.map((name) => ({ [name]: name }))
			.reduce((prev, curr) => ({ ...prev, ...curr }), {})

		return Object.keys(filterValidObjectValues(transformFn(namesObj)))
	}

	const update = (newData: T) => {
		if (!data) return

		send({
			command: 'update',
			block,
			id,
			data: filterValidObjectValues(
				transform
					? transform(getObjectsDiffDeep(data, newData))
					: getObjectsDiffDeep(data, newData)
			)
		})

		setData(newData)
	}

	const onMessage = (event: MessageEvent<any>) => {
		if (!listener) return

		const {
			data: eventData,
			block: eventBlock,
			focus: focusedFieldName,
			blur: bluredFieldName
		} = JSON.parse(event.data)

		if (focusedFieldName && transformRaw) {
			const transformedFocusedFieldName = getTransformedKeys(
				typeof focusedFieldName === 'string' ? [focusedFieldName] : focusedFieldName,
				transformRaw
			)

			setFocusedFields([...focusedFields, ...transformedFocusedFieldName])
		}

		if (bluredFieldName && transformRaw) {
			const transformedBluredFieldName = getTransformedKeys(
				[bluredFieldName],
				transformRaw
			)[0]

			setFocusedFields(
				focusedFields.filter((name) => name !== transformedBluredFieldName)
			)
		}

		// data
		if (eventBlock === block && eventData) {
			const transformedData = transformRaw ? transformRaw(eventData) : eventData
			const validData = filterValidObjectValues(transformedData) as T

			setData({
				...data,
				...validData
			})
			setLoading(false)
		}
	}

	const focus = (fieldName: string) => {
		if (!transform) return

		const transformedFieldName = getTransformedKeys([fieldName], transform)[0]

		send({
			command: 'focus',
			block,
			id,
			field: transformedFieldName
		})
	}

	const blur = (fieldName: string) => {
		if (!transform) return

		const transformedFieldName = getTransformedKeys([fieldName], transform)[0]

		send({
			command: 'blur',
			block,
			id,
			field: transformedFieldName
		})
	}

	useEffect(() => {
		if (subscription && isReady && !isSubscribed) {
			subscribe()
			setSubscribed(true)
		}

		return () => {
			if (subscription && isSubscribed) {
				unsubscribe()
				setSubscribed(false)
			}
		}
	}, [isReady, isSubscribed])

	useEffect(() => {
		if (listener && instance) {
			instance.addEventListener('message', onMessage)

			return () => {
				instance.removeEventListener('message', onMessage)
			}
		}
	}, [instance, listener, onMessage])

	return {
		data,
		isLoading,
		focusedFields,
		subscribe,
		unsubscribe,
		update,
		focus,
		blur,
		connect,
		disconnect
	}
}
