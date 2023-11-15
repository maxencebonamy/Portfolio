"use client"

/* eslint-disable max-len */
import { Blob } from "@/lib/components/atoms/blob"
import Logo from "../components/atoms/svg/logo"
import Mouse from "../components/mouse"
import type { ReactElement } from "react"
import { breakpoints } from "@/lib/utils"
import { langData } from "@/lib/lang"
import { useLangStore, useViewportStore } from "../stores"

const computeBlobSize = (viewportWidth: number): number => {
	if (viewportWidth >= breakpoints.LG) return 12
	if (viewportWidth >= breakpoints.SM) return 9
	return 8
}

export const Home = (): ReactElement => {
	const { lang } = useLangStore()
	const { width } = useViewportStore()

	const blobSize = computeBlobSize(width)

	return (
		<section className="w-full h-screen flex items-center justify-center flex-col">
			<Blob
				size={blobSize}
				className="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			/>
			<div className="flex items-center justify-center flex-col gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<Logo className="z-10 h-28 md:h-32 lg:h-40 fill-dark dark:fill-light transition-colors duration-500 mb-3" />
				<span className="flex items-center flex-col lg:flex-row justify-center gap-3 lg:gap-6">
					<p className="text-transition z-10 uppercase text-dark dark:text-light transition-all duration-500 text-6xl md:text-7xl lg:text-8xl font-light whitespace-nowrap" lang={lang}>
						{langData[lang].home[0]}
					</p>
					<p className="text-transition z-10 uppercase transition-all duration-500 text-6xl md:text-7xl lg:text-8xl font-extrabold [color:transparent] stroke-dark dark:stroke-light italic whitespace-nowrap" lang={lang}>
						{langData[lang].home[1]}
					</p>
				</span>
				<p className="text-transition z-10 uppercase text-dark dark:text-light transition-all duration-500 text-6xl md:text-7xl lg:text-8xl font-bold whitespace-nowrap" lang={lang}>
					{langData[lang].home[2]}
				</p>
			</div>
			<Mouse
				size={4}
				className="absolute left-1/2 -translate-x-1/2 bottom-12"
			/>
		</section>
	)
}