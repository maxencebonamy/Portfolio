import clsx from "clsx"
import type { ReactElement } from "react"
import type { ScrollIndicatorProps } from "."

export const ScrollIndicator = ({ className }: ScrollIndicatorProps): ReactElement => {
	const style = clsx(
		"w-10 h-16",
		"border-[0.15rem] border-dark dark:border-light rounded-full",
		"flex flex-col items-center justify-start",
		"transition-colors duration-500",
		className ?? ""
	)

	const spanStyle = clsx(
		"w-[0.15rem] h-4",
		"bg-dark dark:bg-light",
		"mouse-scroll rounded-full mt-3",
		"transition-colors duration-500"
	)

	return (
		<div className={style}>
			<span className={spanStyle} />
		</div>
	)
}