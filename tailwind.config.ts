import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: "class",
	content: [
		"./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		colors: {
			light: "#EBEBEB",
			dark: "#1A1A1A",
			red: "#FF6A69"
		},
		fontFamily: {
			sans: ["Poppins"]
		},
		extend: {}
	},
	plugins: []
}
export default config