import { describe, test, expect } from "vitest"
import { useCircularArray } from "./index"

const testDataSource1 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const { getGroupByIndex, getItemByRemainderIndex } = useCircularArray(
	testDataSource1,
	5,
)

describe("useCircularArray", () => {
	test("getItemByRemainderIndex", () => {
		expect(getItemByRemainderIndex(testDataSource1, 0)).toBe(0)
		expect(getItemByRemainderIndex(testDataSource1, 8)).toBe(8)
		expect(getItemByRemainderIndex(testDataSource1, 9)).toBe(0)
		expect(getItemByRemainderIndex(testDataSource1, -1)).toBe(8)
	})

	test("getGroupArray", () => {
		expect(getGroupByIndex(0)).toEqual([0, 1, 2, 3, 4])
		expect(getGroupByIndex(1)).toEqual([5, 6, 7, 8, 0])
		expect(getGroupByIndex(2)).toEqual([1, 2, 3, 4, 5])
		expect(getGroupByIndex(3)).toEqual([6, 7, 8, 0, 1])
		expect(getGroupByIndex(-1)).toEqual([4, 5, 6, 7, 8])
		expect(getGroupByIndex(-2)).toEqual([8, 0, 1, 2, 3])
	})
})
