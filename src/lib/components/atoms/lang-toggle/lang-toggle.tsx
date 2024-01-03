"use client"

import { useState, type ReactElement } from "react"
import type { LangToggleProps } from "."
import clsx from "clsx"
import { useLangStore } from "@/lib/stores/lang"

export const LangToggle = ({ className }: LangToggleProps): ReactElement => {
	const style = clsx(
		className ?? "",
		"w-12",
		"flex flex-row items-center justify-between",
		"cursor-pointer"
	)

	const [isRotating, setIsRotating] = useState(false)

	const { lang, toggleLang } = useLangStore()

	const handleClick = (): void => {
		if (isRotating) return

		const textElements = document.getElementsByClassName("text-transition") as HTMLCollectionOf<HTMLElement>
		for (const item of Array.from(textElements)) {
			item.style.opacity = "0"
		}

		setIsRotating(true)

		window.setTimeout(() => {
			toggleLang()
			for (const item of Array.from(textElements)) {
				item.style.opacity = "1"
			}
		}, 500)

		window.setTimeout(() => {
			setIsRotating(false)
		}, 1000)
	}

	return (
		<div
			onClick={handleClick}
			className={style}
		>
			<p className="text-transition uppercase text-dark dark:text-light text-xl transition-all duration-500">
				{lang}
			</p>
			<p
				className={`arrow-lang text-dark dark:text-light text-2xl transition-colors duration-500 rotate-90 ${
					isRotating ? "rotate-animation" : ""
				}`}
			>
				{">"}
			</p>
		</div>
	)
}