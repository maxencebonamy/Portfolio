import { create } from "zustand"
import type { ViewportProps } from "./viewport.type"

export const useViewportStore = create<ViewportProps>()(set => ({
	width: 0,
	setWidth: (width: number) => set({ width })
}))