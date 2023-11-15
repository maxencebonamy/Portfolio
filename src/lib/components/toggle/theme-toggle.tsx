/* eslint-disable max-len */
import { useThemeStore } from "@/lib/stores"
import type { ReactElement } from "react"

interface ThemeToggleProps {
    className?: string
}

const ThemeToggle = ({ className }: ThemeToggleProps): ReactElement => {
	const { toggleTheme } = useThemeStore()

	return (
		<div
			onClick={toggleTheme}
			className={className ?? "" + " w-16 h-8 bg-dark dark:bg-light rounded-full cursor-pointer transition-colors duration-500"}
		>
			<div className="w-6 h-6 rounded-full bg-light dark:bg-dark relative top-1 left-1 dark:translate-x-8 transition-all duration-500">
				<svg
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-5 h-5 text-dark dark:opacity-0 absolute top-0.5 left-0.5 transition-opacity duration-500"
				>
					<path
						d="M15.0007 9.375C11.901 9.375 9.37545 11.9004 9.37545 15C9.37545 18.0996 11.901 20.625 15.0007 20.625C18.1005 20.625 20.626 18.0996 20.626 15C20.626 11.9004 18.1005 9.375 15.0007 9.375ZM29.4389 14.0918L23.8898 11.3203L25.8528 5.4375C26.1165 4.64062 25.3606 3.88477 24.5695 4.1543L18.6865 6.11719L15.909 0.5625C15.534 -0.1875 14.4675 -0.1875 14.0925 0.5625L11.3209 6.11133L5.4319 4.14844C4.63499 3.88477 3.87909 4.64062 4.14864 5.43164L6.11162 11.3145L0.562527 14.0918C-0.187509 14.4668 -0.187509 15.5332 0.562527 15.9082L6.11162 18.6797L4.14864 24.5684C3.88495 25.3652 4.64085 26.1211 5.4319 25.8516L11.315 23.8887L14.0866 29.4375C14.4616 30.1875 15.5281 30.1875 15.9031 29.4375L18.6747 23.8887L24.5578 25.8516C25.3547 26.1152 26.1106 25.3594 25.8411 24.5684L23.8781 18.6855L29.4272 15.9141C30.189 15.5332 30.189 14.4668 29.4389 14.0918ZM20.3037 20.3027C17.3797 23.2266 12.6217 23.2266 9.69774 20.3027C6.77377 17.3789 6.77377 12.6211 9.69774 9.69727C12.6217 6.77344 17.3797 6.77344 20.3037 9.69727C23.2277 12.6211 23.2277 17.3789 20.3037 20.3027Z"
						fill="#1A1A1A"
					/>
				</svg>
				<svg
					width="27"
					height="32"
					viewBox="0 0 27 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-4 h-4 fill-light text-light opacity-0 dark:opacity-100 absolute top-1 left-1 transition-opacity duration-500"
				>
					<path
						d="M15.7148 0.25C7.03125 0.25 0 7.30234 0 16C0 24.6977 7.03125 31.75 15.7148 31.75C19.9758 31.75 23.8359 30.0484 26.6695 27.2922C27.0211 26.9477 27.1125 26.4133 26.8875 25.9773C26.6625 25.5414 26.1773 25.2953 25.6922 25.3797C25.0031 25.4992 24.3 25.5625 23.5758 25.5625C16.7625 25.5625 11.2359 20.0219 11.2359 13.1875C11.2359 8.56094 13.7672 4.53203 17.5148 2.40859C17.9438 2.1625 18.1617 1.67031 18.0563 1.19219C17.9508 0.714063 17.543 0.355469 17.0508 0.313281C16.6078 0.278125 16.1648 0.257031 15.7148 0.257031V0.25Z"
						fill="#EBEBEB"
					/>
				</svg>
			</div>
		</div>
	)
}

export default ThemeToggle