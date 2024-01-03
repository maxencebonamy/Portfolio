"use client"

import { useEffect } from "react"
import type { ReactElement } from "react"
import { useThemeStore } from "@/lib/stores/theme"

export const ThemeProvider = (): ReactElement => {
	const { theme, setTheme } = useThemeStore()

	useEffect(() => {
		setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
	}, [])

	useEffect(() => {
		const body = document.querySelector("body")
		if (!body) return

		if (theme === "dark") body.classList.add("dark")
		else body.classList.remove("dark")
	}, [theme])

	return <></>
}