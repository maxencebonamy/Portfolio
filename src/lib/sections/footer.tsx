"use client"

import type { ReactElement } from "react"
import clsx from "clsx"
import { useLang } from "@/lib/hooks/lang"

export const Footer = (): ReactElement => {
	const style = clsx(
		"flex flex-col items-center justify-center",
		"w-full py-20 mt-32 gap-2"
	)

	const textStyle = clsx(
		"text-dark dark:text-light",
		"lang-transition transition-all duration-500",
		"text-md text-center"
	)

	const lang = useLang()

	return (
		<footer className={style}>
			<p className={textStyle}>© Maxence Bonamy 2023</p>
			<p className={textStyle} lang={lang.id}>{lang.footer.content}</p>
		</footer>
	)
}