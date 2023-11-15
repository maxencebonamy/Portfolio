import { EN } from "./en.lang"
import { FR } from "./fr.lang"
import type { Lang, LangData } from "./lang.type"

export const langData = {
	"en": EN,
	"fr": FR
} satisfies {[lang in Lang]: LangData}