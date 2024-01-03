export type Theme = "light" | "dark"

export type ThemeState = {
	theme: Theme
	setTheme: (theme: Theme) => void
	toggleTheme: () => void
}