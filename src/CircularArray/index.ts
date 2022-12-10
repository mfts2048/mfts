/**
 * 环形数组
 * 功能需求：
 * 1. 表格轮播，
 * 2. 无限循环
 * 3. 支持上滚显示倒数五条数据，
 * 4. 向下显示正数的五条数据
 * 5. 如果数据不足五条展示，就用数据最前面的几条补上去
 *
 * const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
 *
 *                [8, 0, 1, 2, 3]
 * 向上滚动数据    [4, 5, 6, 7, 8]
 * 当前展示数据 => [0, 1, 2, 3, 4]
 * 向下滚动数据    [5, 6, 7, 8, 0]
 *                [1, 2, 3, 4, 5]
 */
export function useCircularArray(arr: number[], groupNumber: number) {
	/**
	 * 环形数组
	 * 1. 根据索引获取对应的区域内的数据
	 * 2. 类似大齿轮小齿轮之类得
	 */
	const getGroupByIndex = (groupIndex: number) => {
		const x = groupIndex * groupNumber
		const y = (groupIndex + 1) * groupNumber

		let temp = x
		const group = []
		while (temp < y) {
			group.push(getItemByRemainderIndex(arr, temp))
			temp++
		}
		return group
	}

	return { getGroupByIndex, getItemByRemainderIndex }
}

/**
 * 环形数组
 * 1. 根据索引取值
 * 2. 将索引按照数据的长度取余后进行查询数据
 */
function getItemByRemainderIndex(arr: any[], i: number) {
	if (typeof i !== "number") return undefined

	const len = arr.length

	if (len === 0) return undefined

	i = i % len
	if (i < 0) {
		i = len + i
	}
	return arr[i]
}
