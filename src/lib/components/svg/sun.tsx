import type { ReactElement } from "react"
import type { SVGProps } from "."

export const Sun = ({ className }: SVGProps): ReactElement => {
	return (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			className={className ?? ""}
		>
			<path
				// eslint-disable-next-line max-len
				d="M15.0007 9.375C11.901 9.375 9.37545 11.9004 9.37545 15C9.37545 18.0996 11.901 20.625 15.0007 20.625C18.1005 20.625 20.626 18.0996 20.626 15C20.626 11.9004 18.1005 9.375 15.0007 9.375ZM29.4389 14.0918L23.8898 11.3203L25.8528 5.4375C26.1165 4.64062 25.3606 3.88477 24.5695 4.1543L18.6865 6.11719L15.909 0.5625C15.534 -0.1875 14.4675 -0.1875 14.0925 0.5625L11.3209 6.11133L5.4319 4.14844C4.63499 3.88477 3.87909 4.64062 4.14864 5.43164L6.11162 11.3145L0.562527 14.0918C-0.187509 14.4668 -0.187509 15.5332 0.562527 15.9082L6.11162 18.6797L4.14864 24.5684C3.88495 25.3652 4.64085 26.1211 5.4319 25.8516L11.315 23.8887L14.0866 29.4375C14.4616 30.1875 15.5281 30.1875 15.9031 29.4375L18.6747 23.8887L24.5578 25.8516C25.3547 26.1152 26.1106 25.3594 25.8411 24.5684L23.8781 18.6855L29.4272 15.9141C30.189 15.5332 30.189 14.4668 29.4389 14.0918ZM20.3037 20.3027C17.3797 23.2266 12.6217 23.2266 9.69774 20.3027C6.77377 17.3789 6.77377 12.6211 9.69774 9.69727C12.6217 6.77344 17.3797 6.77344 20.3037 9.69727C23.2277 12.6211 23.2277 17.3789 20.3037 20.3027Z"
			/>
		</svg>
	)
}