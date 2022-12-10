/**
 * 字符串转化为 数字
 * 1. 这部分功能只支持将后端的数据转化为可用的数据
 */
export function transformNumber(arg: unknown): number {
	if (typeof arg === "number") {
		return isNaN(arg) ? 0 : arg
	}
	if (!arg) return 0
	if (typeof arg === "string") {
		const res = parseFloat(arg)
		return isNaN(res) ? 0 : res
	}
	return 0
}

/**
 * 字符串转化为数组，按照逗号切割
 * 1. 这部分功能只支持将后端的数据转化为可用的数据
 */
export function transformArray(arg: unknown): string[] {
	if (typeof arg !== "string") return []
	if (!arg) return []
	return arg.split(",")
}

/**
 * 字符串转化为数组，按照逗号切割
 * 1. 这部分功能只支持将后端的数据转化为可用的数据
 * 2. 对对象的支持可以忽略不记，所以直接返回空
 */
export function transformString(arg: unknown): string {
	if (Array.isArray(arg)) {
		return arg.join(",")
	}
	if (typeof arg === "string") {
		return arg
	}
	if (typeof arg === "number" && !isNaN(arg)) {
		return arg.toString()
	}
	return ""
}
