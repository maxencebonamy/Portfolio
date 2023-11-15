"use client"

import { useEffect, type ReactElement } from "react"
import { useViewportStore } from "../stores"

export const ViewportProvider = (): ReactElement => {
	const { width, setWidth } = useViewportStore()

	const onResize = (): void => {
		setWidth(window.innerWidth)
	}

	useEffect(() => {
		onResize()
	}, [])

	useEffect(() => {
		window.addEventListener("resize", onResize)
		return () => {
			window.removeEventListener("resize", onResize)
		}
	}, [width])

	return <></>
}