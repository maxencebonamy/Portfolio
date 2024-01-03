import type { CreatePageArgs } from "../create-page.type"

// eslint-disable-next-line no-empty-pattern
export default ({  }: CreatePageArgs): string => {
	return (
		`import type { ReactElement } from "react"

export default (): ReactElement => {
	return (
		<></>
	)
}`
	)
}