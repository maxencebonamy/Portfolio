import { toPascalCase } from "../../utils/string"
import type { CreateComponentArgs } from "../create-component.type"

export default ({ name }: CreateComponentArgs): string => {
	const pascalName = toPascalCase(name)

	return (
		`import type { ReactElement } from "react"
import type { ${pascalName}Props } from "."

export const ${pascalName} = ({  }: ${pascalName}Props): ReactElement => {
	return (
		<></>
	)
}`
	)
}