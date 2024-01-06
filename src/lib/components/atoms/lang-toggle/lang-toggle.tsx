"use client"

import { useState, type ReactElement } from "react"
import type { LangToggleProps } from "."
import { ChevronDown } from "lucide-react"
import clsx from "clsx"
import { useLangStore } from "@/lib/stores/lang"
import { getLangElements } from "./lang-toggle.util"
import "@/lib/styles/animations/lang-toggle.css"

export const LangToggle = ({ className }: LangToggleProps): ReactElement => {
	const style = clsx(
		"flex flex-row items-center justify-between gap-1",
		"cursor-pointer",
		"uppercase text-dark dark:text-light text-xl",
		"transition-all duration-500",
		className ?? "",
	)

	const [isRotating, setIsRotating] = useState(false)

	const { lang, toggleLang } = useLangStore()

	const handleClick = (): void => {
		if (isRotating) return

		const langElements = getLangElements()
		langElements.forEach((item) => {
			item.style.opacity = "0"
		})

		setIsRotating(true)

		window.setTimeout(() => {
			toggleLang()
			langElements.forEach((item) => {
				item.style.opacity = "1"
			})
		}, 500)

		window.setTimeout(() => {
			setIsRotating(false)
		}, 1000)
	}

	return (
		<p onClick={handleClick} className={style} lang={lang}>
			{lang}
			<ChevronDown className={clsx({ "lang-toggle": isRotating })} />
		</p>
	)
}