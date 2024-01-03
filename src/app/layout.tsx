import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "@/lib/styles/globals.css"
import type { PropsWithChildren, ReactElement } from "react"
import { ThemeProvider } from "@/lib/providers/theme"
import { ViewportProvider } from "@/lib/providers/viewport/viewport.provider"

const font = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap"
})

export const metadata: Metadata = {
	title: "Maxence Bonamy | Portfolio",
	description: ""
}

export default ({ children }: PropsWithChildren): ReactElement => {
	return (
		<html lang="en">
			<ThemeProvider />
			<ViewportProvider />

			<body className={font.className}>
				{children}
			</body>
		</html>
	)
}