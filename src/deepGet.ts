type IsOptional<Key extends keyof Obj, Obj> = {} extends Pick<Obj, Key>
	? Key
	: never

type DeepRequired<Obj> = {
	[Key in keyof Obj]-?: IsOptional<Key, Obj> extends never
		? Obj[Key]
		: DeepRequired<Obj[Key]>
}

export function deepGet(
	obj: DeepRequired<Record<string, unknown>>,
	...selectors: string[]
) {
	return selectors.map((s) => {
		return s
			.replace(/\[(\w+)\]/g, ".$1")
			.split(".")
			.reduce((prev, cur) => {
				return prev?.[cur]
			}, obj)
	})
}
