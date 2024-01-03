import yargs from "yargs"
import path from "path"
import { createFileIfNotExists, createFolderIfNotExists } from "../utils/path"
import type { CreateComponentArgs } from "./create-component.type"
import { typeToFolder } from "./create-component.util"
import componentTemplate from "./templates/component"
import typeTemplate from "./templates/type"
import indexTemplate from "./templates/index"

export default (): void => {
	void yargs.command<CreateComponentArgs>(
		"$0 <name> [type]",
		"Create a component",
		(yargs) => {
			return yargs
				.positional("name", {
					describe: "Name of the component",
					type: "string"
				})
				.positional("type", {
					describe: "Type of the component",
					type: "string",
					default: null,
					demandOption: false
				})
		},
		({ name, type }: CreateComponentArgs) => {
			const componentPath = path.join("src/lib/components", typeToFolder(type), name)
			createFolderIfNotExists(componentPath)

			createFileIfNotExists(
				path.join(componentPath, `${name}.tsx`),
				componentTemplate({ name, type })
			)

			createFileIfNotExists(
				path.join(componentPath, `${name}.type.ts`),
				typeTemplate({ name, type })
			)

			createFileIfNotExists(
				path.join(componentPath, "index.ts"),
				indexTemplate({ name, type })
			)

			console.log(`Component ${name} created at ${componentPath}`)
		}
	).argv
}