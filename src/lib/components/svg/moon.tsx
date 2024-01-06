import type { ReactElement } from "react"
import type { SVGProps } from "."

export const Moon = ({ className }: SVGProps): ReactElement => {
	return (
		<svg
			width="27"
			height="32"
			viewBox="0 0 27 32"
			xmlns="http://www.w3.org/2000/svg"
			className={className ?? ""}
		>
			<path
				// eslint-disable-next-line max-len
				d="M15.7148 0.25C7.03125 0.25 0 7.30234 0 16C0 24.6977 7.03125 31.75 15.7148 31.75C19.9758 31.75 23.8359 30.0484 26.6695 27.2922C27.0211 26.9477 27.1125 26.4133 26.8875 25.9773C26.6625 25.5414 26.1773 25.2953 25.6922 25.3797C25.0031 25.4992 24.3 25.5625 23.5758 25.5625C16.7625 25.5625 11.2359 20.0219 11.2359 13.1875C11.2359 8.56094 13.7672 4.53203 17.5148 2.40859C17.9438 2.1625 18.1617 1.67031 18.0563 1.19219C17.9508 0.714063 17.543 0.355469 17.0508 0.313281C16.6078 0.278125 16.1648 0.257031 15.7148 0.257031V0.25Z"
			/>
		</svg>
	)
}