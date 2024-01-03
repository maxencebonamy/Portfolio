import type { RefObject } from "react"

export type Section = "home" | "about" | "projects" | "skills" | "contact" | "footer"

export type SectionsState = {
	sections: Record<Section, RefObject<HTMLElement>>
	addSection: (key: Section, ref: RefObject<HTMLElement>) => void
}