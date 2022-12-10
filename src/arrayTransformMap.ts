function arrayTransformMap<T extends Record<string, unknown>>(
	arr: T[],
	key: keyof T,
) {
	const map: Map<string, T[]> = new Map()

	for (let i = 0; i < arr.length; i++) {
		const item = arr[i]
		const mapKey = item[key] as string
		if (map.has(mapKey)) {
			map.get(mapKey)?.push(item)
		} else {
			map.set(mapKey, [item])
		}
	}

	function get(index: string | string[]) {
		let keys: string[] = []
		if (typeof index === "string") {
			keys = index.trim().split(",")
		} else if (Array.isArray(index)) {
			keys = index
		} else {
			throw "参数异常 string | string[]"
		}

		const result = []
		for (let i = 0; i < keys.length; i++) {
			const value = map.get(keys[i]) || []
			result.push(...value)
		}
		return result
	}

	return { get }
}

export { arrayTransformMap }
