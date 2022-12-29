export const getObjectsDiffDeep = (obj1: any, obj2: any): any => {
	const diffObj = Array.isArray(obj2) ? [] : {}

	Object.getOwnPropertyNames(obj2).forEach(function (prop) {
		if (typeof obj2[prop] === 'object') {
			//@ts-ignore
			diffObj[prop] = getObjectsDiffDeep(obj1[prop], obj2[prop])

			if (
				//@ts-ignore
				(Array.isArray(diffObj[prop]) &&
					//@ts-ignore
					Object.getOwnPropertyNames(diffObj[prop]).length === 1) ||
				//@ts-ignore
				Object.getOwnPropertyNames(diffObj[prop]).length === 0
			) {
				//@ts-ignore
				delete diffObj[prop]
			}
		} else if (obj1[prop] !== obj2[prop]) {
			//@ts-ignore
			diffObj[prop] = obj2[prop]
		}
	})
	return diffObj
}
