import type { ReactElement } from "react"
import type { SVGProps } from "./svg.type"

export const RightArrow = ({ className }: SVGProps): ReactElement => {
	return (
		<svg
			className={className ?? ""}
			width="94"
			height="66"
			viewBox="0 0 94 66"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				// eslint-disable-next-line max-len
				d="M15.2782 0.624023H70.592L93.1861 34.9925L61.7459 66H0.975159L35.7259 31.7275L15.2782 0.624023ZM51.16 33.36L30.232 54H56.824L77.752 33.36L64.12 12.624H37.528L51.16 33.36Z"
			/>
		</svg>
	)
}