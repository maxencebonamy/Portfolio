/* eslint-disable max-len */
import Separator from "../components/separator"
import type { ReactElement } from "react"
import React from "react"
import { OutlineArrow } from "../components/atoms/outline-arrow"
import { AboutSeparator } from "../components/layouts/about/separator"
import { RefProvider } from "../providers"
import { AboutTitle } from "../components/layouts/about/title"
import { AboutContent } from "../components/layouts/about/content"

export const About = (): ReactElement => {
	return (
		<RefProvider
			className="w-10/12 lg:w-9/12 bg-light dark:bg-dark transition-colors duration-500 pt-32"
		>

			<div className="flex flex-row items-end justify-start">
				<AboutTitle />
				<OutlineArrow direction="right" className="mb-[7px] lg:ml-6 h-7 sm:h-9 lg:h-11" />
			</div>

			<AboutSeparator />

			<div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
				<div className="flex flex-col items-start justify-center">
					<AboutContent />
				</div>
				<img className="w-10/12 sm:w-1/2 lg:w-1/3 -mb-4 lg:-mt-24 lg:self-end" src="./photo.webp" alt="My Photo" />
			</div>

			<Separator length="100%" className="my-4" />

		</RefProvider>
	)
}