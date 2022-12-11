import { describe, test, expect } from "vitest"
import { arrayTransformMap } from "../src/index"

const arr = [
	{
		id: "1",
		name: "11",
	},
	{
		id: "2",
		name: "11",
	},
]

const { get } = arrayTransformMap(arr, "id")

describe("utils/index", () => {
	test("arrayTransformMap", () => {
		expect(get("1,2")).toEqual([
			{ id: "1", name: "11" },
			{ id: "2", name: "11" },
		])
	})
})
