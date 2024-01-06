import type { ReactElement } from "react"
import type { OutlineArrowProps } from "./outline-arrow.type"
import { LeftArrow } from "../../svg/left-arrow"
import { RightArrow } from "../../svg/right-arrow"
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