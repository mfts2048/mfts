import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"

export default defineConfig([
	{
		input: "./src/index.ts",
		plugins: [typescript()],
		output: [
			{
				format: "cjs",
				file: "dist/index.js",
			},
			{
				format: "module",
				file: "dist/index.esm.js",
			},
			{
				format: "umd",
				file: "dist/index.min.js",
				name: "mfts",
			},
		],
	},
	/* 单独生成声明文件 */
	{
		input: "./src/index.ts",
		plugins: [dts()],
		output: {
			format: "esm",
			file: "dist/index.d.ts",
		},
	},
])
