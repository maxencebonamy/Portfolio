import { create } from "zustand"
import type { SectionsState, Section } from "./sections.type"
import type { RefObject } from "react"

export const useSectionsStore = create<SectionsState>(set => ({
	sections: {} as { [key in Section]: RefObject<HTMLElement> },
	addSection: (key, ref) => {
		set(state => ({
			sections: { ...state.sections, [key]: ref }
		}))
	}
}))