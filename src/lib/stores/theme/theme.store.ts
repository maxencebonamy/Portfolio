import { create } from "zustand"
import type { ThemeState } from "./theme.type"

export const useThemeStore = create<ThemeState>()(set => ({
	theme: "dark",
	setTheme: theme => set({ theme }),
	toggleTheme: () => set(state => {
		switch (state.theme) {
		case "dark":
			return { theme: "light" }
		case "light":
			return { theme: "dark" }
		}
	})
}))