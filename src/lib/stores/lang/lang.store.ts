import { create } from "zustand"
import type { LangState } from "."
import type { Lang } from "@/lib/lang"

export const useLangStore = create<LangState>()(set => ({
	lang: "fr",
	setLang: (lang: Lang) => set({ lang }),
	toggleLang: () => set(state => {
		switch (state.lang) {
		case "fr":
			return { lang: "en" }
		case "en":
			return { lang: "fr" }
		}
	})
}))