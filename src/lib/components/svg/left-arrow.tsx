import type { ReactElement } from "react"
import type { SVGProps } from "."

export const LeftArrow = ({ className }: SVGProps): ReactElement => {
	return (
		<svg
			className={className ?? ""}
			width="93"
			height="66"
			viewBox="0 0 93 66"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				// eslint-disable-next-line max-len
				d="M23.0565 66L0.443481 31.762L31.8698 0.624023H92.5604L57.9085 34.9581L78.4106 66H23.0565ZM42.472 33.36L63.4 12.624H36.808L15.88 33.36L29.512 54H56.104L42.472 33.36Z"
			/>
		</svg>
	)
}