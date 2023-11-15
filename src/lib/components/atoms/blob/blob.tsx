"use client"

import type { ReactElement } from "react"
import { useEffect, useState } from "react"
import type { BlobProps, CircleProps } from "./blob.type"

const Circle = ({ size, className }: CircleProps): ReactElement => {
	const [style, setStyle] = useState({})

	useEffect(() => {
		setStyle({
			...style,
			width: `${size}rem`,
			height: `${size}rem`,
			boxShadow: `0 0 ${size / 4}rem ${size / 4}rem #FF6A69`
		})
	}, [size])

	return (
		<div style={style} className={`${className ?? ""} absolute rounded-full bg-red`}></div>
	)
}

export const Blob = ({ size, className }: BlobProps): ReactElement => {
	const [actualSize, setActualSize] = useState(size)

	useEffect(() => {
		const interval = setInterval(() => {
			setActualSize(size * 0.9999)
			setTimeout(() => {
				setActualSize(size)
			}, 10)
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<div className={`${className ?? ""} blob`}>
			<Circle size={actualSize} className="blob-circle-1 -translate-x-1/2 -translate-y-1/2" />
			<Circle size={actualSize} className="blob-circle-2 -translate-x-1/2 -translate-y-1/2" />
			<Circle size={actualSize} className="blob-circle-3 -translate-x-1/2 -translate-y-1/2" />
			<Circle size={actualSize} className="blob-circle-4 -translate-x-1/2 -translate-y-1/2" />
		</div>
	)
}