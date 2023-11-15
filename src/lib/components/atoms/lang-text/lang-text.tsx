"use client"

import type { ReactElement } from "react"
import type { LangTextProps } from "./lang-text.type"
import { useLang } from "@/lib/hooks/lang"

export const LangText = ({ content, className, componentType: Component }: LangTextProps): ReactElement => {
	const lang = useLang()

	return (
		<Component className={className ?? ""} lang={lang.id}>
			{content(lang)}
		</Component>
	)
}