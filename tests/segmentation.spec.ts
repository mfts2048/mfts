import { segmentation } from "../src/index"
import type { Item } from "../src/index"
import { expect, it, describe } from "vitest"

const examples1 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 0, 12]
const examples2: Item[] = [{ span: 4 }, { span: 8 }, { span: 12 }, { span: 24 }]
const examples3: Item[] = [
	{ span: 4 },
	{ span: 8 },
	undefined,
	{ span: 12 },
	{ span: 24 },
]

describe("24点", () => {
	it("排列所有都是数字的数组", () => {
		expect(segmentation(examples1)).toEqual([
			[1, 2, 3, 4, 5, 6],
			[6, 7, 8],
			[9, 0, 12],
		])
	})
	it("排列所有都是对象的数组", () => {
		expect(segmentation(examples2)).toEqual([
			[{ span: 4 }, { span: 8 }, { span: 12 }],
			[{ span: 24 }],
		])
	})
	it("对象中存在 undefined", () => {
		expect(segmentation(examples3)).toEqual([
			[{ span: 4 }, { span: 8 }, undefined, { span: 12 }],
			[{ span: 24 }],
		])
	})
	it("使用函数", () => {
		expect(segmentation(examples3, (el) => (el ? el.span : 0))).toEqual([
			[{ span: 4 }, { span: 8 }, undefined, { span: 12 }],
			[{ span: 24 }],
		])
	})
})
