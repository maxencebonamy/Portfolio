import { ScrollIndicator } from "@/lib/components/atoms/scroll-indicator"
import type { ReactElement } from "react"
import { HomeTitle } from "@/lib/components/organisms/home-title"
import { HomeBlob } from "@/lib/components/organisms/home-blob"

export const Home = (): ReactElement => {
	return (
		<section className="w-full h-screen flex items-center justify-center flex-col">
			<HomeBlob
				className="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			/>

			<HomeTitle
				className="flex items-center justify-center flex-col gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			/>

			<ScrollIndicator
				className="absolute left-1/2 -translate-x-1/2 bottom-12"
			/>
		</section>
	)
}