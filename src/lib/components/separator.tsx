import clsx from "clsx"
import type { ReactElement } from "react"

interface SeparatorProps {
    orientation: "vertical" | "horizontal"
    length: string
    className?: string
    corners?: boolean
}

const Separator = ({ orientation, length, className, corners }: SeparatorProps): ReactElement => {
	const style = {
		width: orientation === "horizontal" ? length : "0.1rem",
		height: orientation === "vertical" ? length : "0.1rem"
	}

	return <div style={style} className= {clsx(
		className ?? "",
		corners ? "" : "rounded-full",
		"bg-dark dark:bg-light transition-colors duration-500 self-stretch"
	)} />
}

export default Separator