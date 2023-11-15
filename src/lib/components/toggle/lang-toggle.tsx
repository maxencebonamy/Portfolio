import { useLangStore } from "@/lib/stores"
import type { ReactElement } from "react"
import { useState } from "react"

interface LangToggleProps {
    className?: string
}

const LangToggle = ({ className }: LangToggleProps): ReactElement => {
	const [isRotating, setIsRotating] = useState(false)

	const { lang, toggleLang } = useLangStore()

	const handleClick = (): void => {
		if (isRotating) return

		const textElements = document.getElementsByClassName("text-transition") as HTMLCollectionOf<HTMLElement>
		for (const item of textElements) {
			item.style.opacity = "0"
		}

		setIsRotating(true)

		window.setTimeout(() => {
			toggleLang()
			for (const item of textElements) {
				item.style.opacity = "1"
			}
		}, 500)

		window.setTimeout(() => {
			setIsRotating(false)
		}, 1000)
	}

	return (
		<div
			onClick={handleClick}
			className={className ?? "" + " w-12 flex items-center justify-between flex-row cursor-pointer"}
		>
			<p className="text-transition uppercase text-dark dark:text-light text-xl transition-all duration-500">
				{lang}
			</p>
			<p
				className={`arrow-lang text-dark dark:text-light text-2xl transition-colors duration-500 rotate-90 ${
					isRotating ? "rotate-animation" : ""
				}`}
			>
				{">"}
			</p>
		</div>
	)
}

export default LangToggle