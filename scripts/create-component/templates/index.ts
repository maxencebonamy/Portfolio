import { toPascalCase } from "../../utils/string"
import type { CreateComponentArgs } from "../create-component.type"

export default ({ name }: CreateComponentArgs): string => {
	const pascalName = toPascalCase(name)

	return (
		`export { ${pascalName} } from "./${name}"
export type { ${pascalName}Props } from "./${name}.type"`
	)
}