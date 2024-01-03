import { create } from "zustand"
import type { ViewportState } from "."

export const useViewportStore = create<ViewportState>()(set => ({
	width: 0,
	setWidth: (width: number) => set({ width })
}))