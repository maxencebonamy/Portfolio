import { create } from "zustand"
import type { Section, SectionsState } from "."
import type { RefObject } from "react"

export const useSectionsStore = create<SectionsState>()(set => ({
	sections: {} as Record<Section, RefObject<HTMLElement>>,
	addSection: (key, ref) => {
		set(state => ({
			sections: { ...state.sections, [key]: ref }
		}))
	}
}))