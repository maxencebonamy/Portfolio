import { toCamelCase, toPascalCase } from "../../utils/string"
import type { CreateStoreArgs } from "../create-store.type"

export default ({ name }: CreateStoreArgs): string => {
	const pascalName = toPascalCase(name)
	const camelName = toCamelCase(name)

	return (
		`import { create } from "zustand"
import type { ${pascalName}Type, ${pascalName}State } from "."

export const use${pascalName}Store = create<${pascalName}State>()(set => ({
	${camelName}: null,
	set${pascalName}: (${camelName}: ${pascalName}Type | null) => set({ ${camelName} })
}))`
	)
}