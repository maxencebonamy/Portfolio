import { toPascalCase } from "../../utils/string"
import type { CreateStoreArgs } from "../create-store.type"

export default ({ name }: CreateStoreArgs): string => {
	const pascalName = toPascalCase(name)

	return (
		`export { use${pascalName}Store } from "./${name}.store"
export type { ${pascalName}Type, ${pascalName}State } from "./${name}.type"`
	)
}