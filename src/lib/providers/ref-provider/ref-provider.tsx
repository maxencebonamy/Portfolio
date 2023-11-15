"use client"

import { useRef, type ReactElement } from "react"
import { useSectionsStore } from "../../stores"
import type { RefProviderProps } from "./ref-provider.type"

export const RefProvider = ({ children, className }: RefProviderProps): ReactElement => {
	const ref = useRef<HTMLElement>(null)
	const addSection = useSectionsStore(state => state.addSection)
	addSection("about", ref)

	return (
		<section ref={ref} className={className ?? ""}>
			{children}
		</section>
	)
}