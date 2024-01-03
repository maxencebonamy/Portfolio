import { toCamelCase, toPascalCase } from "../../utils/string"
import type { CreateStoreArgs } from "../create-store.type"

export default ({ name }: CreateStoreArgs): string => {
	const pascalName = toPascalCase(name)
	const camelName = toCamelCase(name)

	return (
		`export type ${pascalName}Type = {

}

export type ${pascalName}State = {
	${camelName}: ${pascalName}Type | null
	set${pascalName}: (${camelName}: ${pascalName}Type | null) => void
}`
	)
}