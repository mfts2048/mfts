import { describe, test, expect } from "vitest"
import { deepGet } from "../src/index"

const obj = {
	selector: { to: { val: "val to select" } },
	user: { name: "xaoHong" },
	target: [1, 2, { a: "test" }],
	undefined: "2",
}

describe("utils/index", () => {
	test("deepGet", () => {
		expect(deepGet(obj, "selector.to.val", "")).toStrictEqual([
			"val to select",
			undefined,
		])
		expect(deepGet(obj, "user.name")).toStrictEqual(["xaoHong"])
		expect(deepGet(obj, "target.0")).toStrictEqual([1])
		expect(deepGet(obj, "target.1")).toStrictEqual([2])
		expect(deepGet(obj, "target.2")).toStrictEqual([{ a: "test" }])
		expect(deepGet(obj, "target.3")).toStrictEqual([undefined])
		expect(deepGet(obj, "target.5")).toStrictEqual([undefined])
		expect(deepGet(obj, "undefined")).toStrictEqual(["2"])

		expect(deepGet(obj, "185.00")).toStrictEqual([undefined])
		expect(deepGet(obj, "85")).toStrictEqual([undefined])
		expect(deepGet(obj, "{}")).toStrictEqual([undefined])
		expect(deepGet(obj, "[]")).toStrictEqual([undefined])
		expect(deepGet(obj, "NaN")).toStrictEqual([undefined])
		expect(deepGet(obj, "")).toStrictEqual([undefined])
	})
})
