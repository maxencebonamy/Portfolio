"use client"

import { useLang } from "@/lib/hooks/lang"
import clsx from "clsx"
import { Fragment, type ReactElement } from "react"

export const AboutContent = (): ReactElement => {
	const style = clsx([
		"text-dark dark:text-light",
		"text-md",
		"text-transition transition-all duration-500"
	])

	const lang = useLang()

	return (
		<p className={style} lang={lang.id}>
			{
				lang.about.content.map((e, index) => (
					<Fragment key={index}>
						{e}
						{index > 0 ? <br /> : <></>}
					</Fragment>
				))
			}
		</p>
	)
}