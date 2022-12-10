import { arrayTransformMap } from "./index"
import { describe, test, expect } from "vitest"

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
	test("transformNumber", () => {
		expect(get("1,2")).toEqual([
			{ id: "1", name: "11" },
			{ id: "2", name: "11" },
		])
	})
})
