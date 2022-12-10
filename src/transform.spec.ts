import { describe, test, expect } from "vitest"
import { transformNumber, transformArray, transformString } from "./transform"

describe("utils/index", () => {
	test("transformNumber", () => {
		expect(transformNumber(undefined)).toBe(0)
		expect(transformNumber(null)).toBe(0)
		expect(transformNumber(false)).toBe(0)
		expect(transformNumber(true)).toBe(0)
		expect(transformNumber("")).toBe(0)
		expect(transformNumber("124")).toBe(124)
		expect(transformNumber("185.24")).toBe(185.24)
		expect(transformNumber("185.00")).toBe(185)
		expect(transformNumber(185.0)).toBe(185)
		expect(transformNumber(85)).toBe(85)
		expect(transformNumber({})).toBe(0)
		expect(transformNumber([])).toBe(0)
		expect(transformNumber(NaN)).toBe(0)
	})

	test("transformArray", () => {
		expect(transformArray(undefined)).toEqual([])
		expect(transformArray(null)).toEqual([])
		expect(transformArray("")).toEqual([])
		expect(transformArray("1")).toEqual(["1"])
		expect(transformArray("1,2,3")).toEqual(["1", "2", "3"])
		expect(transformArray(0)).toEqual([])
		expect(transformArray(NaN)).toEqual([])
		expect(transformArray(false)).toEqual([])
		expect(transformArray({})).toEqual([])
		expect(transformArray([])).toEqual([])
	})

	test("transformString", () => {
		expect(transformString(undefined)).toBe("")
		expect(transformString(null)).toBe("")
		expect(transformString(234)).toBe("234")
		expect(transformString(NaN)).toBe("")
		expect(transformString("")).toBe("")
		expect(transformString("hello")).toBe("hello")
		expect(transformString(false)).toBe("")
		expect(transformString({})).toBe("")
		expect(transformString([])).toBe("")
		expect(transformString(["x", "y"])).toBe("x,y")
	})
})
