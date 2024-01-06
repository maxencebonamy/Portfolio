import type { ReactElement } from "react"
import clsx from "clsx"
import { ScrollIndicator } from "@/lib/components/atoms/scroll-indicator"
import { HomeTitle } from "@/lib/components/organisms/home-title"
import { HomeBlob } from "@/lib/components/organisms/home-blob"
import "@/lib/styles/positions.css"

export const Home = (): ReactElement => {
	const style = clsx(
		"w-full h-screen",
		"flex flex-col items-center justify-center"
	)

	return (
		<section className={style}>
			<HomeBlob className="center z-0" />

			<HomeTitle className="center" />

			<ScrollIndicator className="center-x bottom-12" />
		</section>
	)
}