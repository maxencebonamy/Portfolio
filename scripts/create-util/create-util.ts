import yargs from "yargs"
import path from "path"
import { createFileIfNotExists, createFolderIfNotExists } from "../utils/path"
import type { CreateUtilArgs } from "./create-util.type"
import indexTemplate from "./templates/index"

export default (): void => {
	void yargs.command<CreateUtilArgs>(
		"$0 <name>",
		"Create a util",
		(yargs) => {
			return yargs
				.positional("name", {
					describe: "Name of the util",
					type: "string"
				})
		},
		({ name }: CreateUtilArgs) => {
			const utilPath = path.join("src/lib/utils", name)
			createFolderIfNotExists(utilPath)

			createFileIfNotExists(
				path.join(utilPath, `${name}.util.ts`),
				""
			)

			createFileIfNotExists(
				path.join(utilPath, `${name}.type.ts`),
				""
			)

			createFileIfNotExists(
				path.join(utilPath, "index.ts"),
				indexTemplate({ name })
			)

			console.log(`Util ${name} created at ${utilPath}`)
		}
	).argv
}