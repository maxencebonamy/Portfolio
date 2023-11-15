import { langData, type LangData } from "@/lib/lang"
import { useLangStore } from "@/lib/stores"

export const useLang = (): LangData => {
	const { lang } = useLangStore()

	return langData[lang]
}