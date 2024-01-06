import type { ReactElement } from "react"
import type { OutlineArrowProps } from "."
import { LeftArrow, RightArrow } from "@/lib/components/svg"
import clsx from "clsx"

export const OutlineArrow = ({ direction, className }: OutlineArrowProps): ReactElement => {
	const style = clsx(
		"fill-dark dark:fill-light",
		"text-transition transition-all duration-500"
	)

	switch (direction) {

	case "left":
		return (
			<LeftArrow className={clsx(className ?? "", style)} />
		)

	case "right":
		return (
			<RightArrow className={clsx(className ?? "", style)} />
		)

	}
}