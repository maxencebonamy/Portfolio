"use client"

import { useLang } from "@/lib/hooks/lang"
import clsx from "clsx"
import type { ReactElement } from "react"

export const AboutTitle = (): ReactElement => {
	const style = clsx([
		"tetx-left uppercase font-semibold text-dark dark:text-light",
		"max-w-5/6 text-4xl sm:text-5xl lg:text-6xl",
		"text-transition transition-all duration-500"
	])

	const lang = useLang()

	return (
		<h2 className={style} lang={lang.id}>
			{lang.about.title}
		</h2>
	)
}