import { create } from "zustand"
import type { Theme, ThemeState } from "."

export const useThemeStore = create<ThemeState>()(set => ({
	theme: "dark",
	setTheme: (theme: Theme) => set({ theme }),
	toggleTheme: () => set(state => {
		switch (state.theme) {
		case "dark":
			return { theme: "light" }
		case "light":
			return { theme: "dark" }
		}
	})
}))