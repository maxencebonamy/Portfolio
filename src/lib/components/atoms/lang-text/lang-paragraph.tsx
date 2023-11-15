"use client"

import { Fragment, type ReactElement } from "react"
import type { LangParagraphProps } from "./lang-text.type"
import { useLang } from "@/lib/hooks/lang"

export const LangParagraph = ({ content, className }: LangParagraphProps): ReactElement => {
	const lang = useLang()

	return (
		<p className={className ?? ""} lang={lang.id}>
			{
				content(lang).map((e, index) => (
					<Fragment key={index}>
						{e}
						{index > 0 ? <br /> : <></>}
					</Fragment>
				))
			}
		</p>
	)
}