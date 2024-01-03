import type { CreateLayoutArgs } from "../create-layout.type"

// eslint-disable-next-line no-empty-pattern
export default ({  }: CreateLayoutArgs): string => {
	return (
		`import type { PropsWithChildren, ReactElement } from "react"

export default ({ children }: PropsWithChildren): ReactElement => {
	return (
		<>
			{children}
		</>
	)
}`
	)
}