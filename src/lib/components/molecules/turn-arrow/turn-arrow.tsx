import type { ReactElement } from "react"
import type { TurnArrowProps } from "."
import { Turn } from "@/lib/components/svg"

export const TurnArrow = ({ onClick, className }: TurnArrowProps): ReactElement => {
	return (
		<div onClick={onClick}>
			<Turn className={className ?? ""} />
		</div>
	)
}