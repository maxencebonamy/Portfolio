import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import type { PropsWithChildren, ReactElement } from "react"

const font = Poppins({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Maxence Bonamy | Portfolio",
	description: ""
}

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	)
}