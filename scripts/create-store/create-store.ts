import yargs from "yargs"
import path from "path"
import { createFileIfNotExists, createFolderIfNotExists } from "../utils/path"
import type { CreateStoreArgs } from "./create-store.type"
import storeTemplate from "./templates/store"
import typeTemplate from "./templates/type"
import indexTemplate from "./templates/index"

export default (): void => {
	void yargs.command<CreateStoreArgs>(
		"$0 <name>",
		"Create a store",
		(yargs) => {
			return yargs
				.positional("name", {
					describe: "Name of the store",
					type: "string"
				})
		},
		({ name }: CreateStoreArgs) => {
			const storePath = path.join("src/lib/stores", name)
			createFolderIfNotExists(storePath)

			createFileIfNotExists(
				path.join(storePath, `${name}.store.ts`),
				storeTemplate({ name })
			)

			createFileIfNotExists(
				path.join(storePath, `${name}.type.ts`),
				typeTemplate({ name })
			)

			createFileIfNotExists(
				path.join(storePath, "index.ts"),
				indexTemplate({ name })
			)

			console.log(`Store ${name} created at ${storePath}`)
		}
	).argv
}