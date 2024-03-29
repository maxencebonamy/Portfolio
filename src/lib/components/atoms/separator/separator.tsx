import type { ReactElement } from "react"
import type { SeparatorProps } from "."
import clsx from "clsx"

export const Separator = ({ length, className, corners }: SeparatorProps): ReactElement => {
	const style = {
		width: length,
		height: "0.1rem"
	}

	return (
		<div
			style={style}
			className={clsx(
				className ?? "",
				corners ? "" : "rounded-full",
				"bg-dark dark:bg-light transition-colors duration-500"
			)}
		/>
	)
}