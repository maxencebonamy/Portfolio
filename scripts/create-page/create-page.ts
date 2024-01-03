import yargs from "yargs"
import path from "path"
import { createFileIfNotExists, createMultipleFoldersIfNotExist } from "../utils/path"
import type { CreatePageArgs } from "./create-page.type"
import pageTemplate from "./templates/page"

export default (): void => {
	void yargs.command<CreatePageArgs>(
		"$0 <route>",
		"Create a page",
		(yargs) => {
			return yargs
				.positional("route", {
					describe: "Route of the page",
					type: "string"
				})
		},
		({ route }: CreatePageArgs) => {
			const pagePath = path.join("src/app", route)
			createMultipleFoldersIfNotExist(pagePath)

			createFileIfNotExists(
				path.join(pagePath, "page.tsx"),
				pageTemplate({ route })
			)

			console.log(`Page created at ${pagePath}`)
		}
	).argv
}