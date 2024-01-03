"use client"

import type { ReactElement } from "react"
import type { ThemeToggleProps } from "."
import { useThemeStore } from "@/lib/stores/theme"
import { Moon, Sun } from "@/lib/components/svg"
import clsx from "clsx"

export const ThemeToggle = ({ className }: ThemeToggleProps): ReactElement => {
	const style = clsx(
		className ?? "",
		"w-16 h-8",
		"bg-dark dark:bg-light rounded-full cursor-pointer",
		"transition-colors duration-500"
	)

	const toggleTheme = useThemeStore(state => state.toggleTheme)

	return (
		<div
			onClick={toggleTheme}
			className={style}
		>
			<div className="w-6 h-6 rounded-full bg-light dark:bg-dark relative top-1 left-1 dark:translate-x-8 transition-all duration-500">
				<Sun className="w-5 h-5 text-dark dark:opacity-0 absolute top-0.5 left-0.5 transition-opacity duration-500" />
				<Moon className="w-4 h-4 fill-light text-light opacity-0 dark:opacity-100 absolute top-1 left-1 transition-opacity duration-500" />
			</div>
		</div>
	)
}