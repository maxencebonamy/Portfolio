"use client"

import type { ReactElement } from "react"
import clsx from "clsx"
import { Logo } from "@/lib/components/svg"
import { useLang } from "@/lib/hooks/lang"
import type { HomeTitleProps } from "."

export const HomeTitle = ({ className }: HomeTitleProps): ReactElement => {
	const lang = useLang()

	const style = clsx(
		"flex flex-col items-center justify-center",
		"gap-3",
		className ?? ""
	)

	const textStyle = clsx(
		"z-10",
		"uppercase text-6xl md:text-7xl lg:text-8xl whitespace-nowrap",
		"text-transition transition-all duration-500"
	)

	return (
		<div className={style}>
			<Logo className="z-10 h-28 md:h-32 lg:h-40 fill-dark dark:fill-light transition-colors duration-500 mb-3" />

			<span className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6">
				<p className={clsx(textStyle, "text-dark dark:text-light font-light")} lang={lang.id}>
					{lang.home[0]}
				</p>
				<p className={clsx(textStyle, "font-extrabold [color:transparent] stroke-dark dark:stroke-light italic")} lang={lang.id}>
					{lang.home[1]}
				</p>
			</span>

			<p className={clsx(textStyle, "text-dark dark:text-light font-bold")} lang={lang.id}>
				{lang.home[2]}
			</p>
		</div>
	)
}