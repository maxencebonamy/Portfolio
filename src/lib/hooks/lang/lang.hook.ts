import { langData, type LangData } from "@/lib/lang"
import { useLangStore } from "@/lib/stores/lang"

export const useLang = (): LangData => {
	const { lang } = useLangStore()

	return langData[lang]
}