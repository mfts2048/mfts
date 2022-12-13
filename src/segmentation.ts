interface Element {
	span: number
}

interface SegmentationElement extends Element {
	span: number
	[propName: string]: unknown
}

type Item = SegmentationElement | undefined

function segmentation(arr: number[], fn?: (el: number) => number): number[][]
function segmentation(arr: Item[], fn?: (el: Item) => number): Item[][]
function segmentation(arr: any[], fn?: any) {
	const rowArr: any[][] = []
	let colArr = []
	let index = 0
	let length = arr.length
	let realRemaining = 24

	while (index < length) {
		let element = arr[index]
		let span: number
		if (typeof element === "number") {
			span = element
		} else if (fn && typeof fn === "function") {
			span = fn(element)
		} else if (typeof element !== "number" && typeof element !== "object") {
			span = 0
		} else if (typeof element !== "number" && !fn) {
			span = element.span
		} else {
			span = 8
		}

		const remaining = realRemaining - span

		if (remaining > 0) {
			colArr.push(element)
			index++
			realRemaining = remaining
			if (index >= length) {
				rowArr.push(colArr)
				colArr = []
			}
		} else if (remaining === 0) {
			colArr.push(element)
			rowArr.push(colArr)
			realRemaining = 24
			colArr = []
			index++
		} else if (remaining < 0) {
			realRemaining = 24
			rowArr.push(colArr)
			colArr = []
		} else {
		}
	}
	return rowArr
}

export { segmentation }
export type { SegmentationElement, Item }
