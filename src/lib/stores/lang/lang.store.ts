import { create } from "zustand"
import type { LangState } from "./lang.type"

export const useLangStore = create<LangState>()(set => ({
	lang: "fr",
	setLang: lang => set({ lang }),
	toggleLang: () => set(state => {
		switch (state.lang) {
		case "fr":
			return { lang: "en" }
		case "en":
			return { lang: "fr" }
		}
	})
}))