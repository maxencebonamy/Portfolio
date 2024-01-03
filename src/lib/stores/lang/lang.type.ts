import type { Lang } from "@/lib/lang"

export type LangState = {
	lang: Lang
	setLang: (lang: Lang) => void
	toggleLang: () => void
}