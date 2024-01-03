import yargs from "yargs"
import path from "path"
import { createFileIfNotExists, createMultipleFoldersIfNotExist } from "../utils/path"
import type { CreateLayoutArgs } from "./create-layout.type"
import layoutTemplate from "./templates/layout"

export default (): void => {
	void yargs.command<CreateLayoutArgs>(
		"$0 <route>",
		"Create a layout",
		(yargs) => {
			return yargs
				.positional("route", {
					describe: "Route of the layout",
					type: "string"
				})
		},
		({ route }: CreateLayoutArgs) => {
			const layoutPath = path.join("src/app", route)
			createMultipleFoldersIfNotExist(layoutPath)

			createFileIfNotExists(
				path.join(layoutPath, "layout.tsx"),
				layoutTemplate({ route })
			)

			console.log(`Layout created at ${layoutPath}`)
		}
	).argv
}