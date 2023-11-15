/* eslint-disable max-len */
import type { ReactElement } from "react"
import { langData } from "@/lib/lang"
import { useLangStore } from "../stores"


export const Footer = (): ReactElement => {
	const { lang } = useLangStore()

	return (
		<footer className="flex flex-col items-center justify-center w-full py-20 mt-32">
			<p className="text-dark dark:text-light transition-all duration-500 text-md">© Maxence Bonamy 2023</p>
			<p className="text-transition text-dark dark:text-light transition-all duration-500 text-md text-center mt-2" lang={lang}>{langData[lang].footer.content}</p>
		</footer>
	)
}