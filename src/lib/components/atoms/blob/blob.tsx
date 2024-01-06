"use client"

import type { CSSProperties, ReactElement } from "react"
import { useEffect, useState } from "react"
import type { BlobProps, CircleProps } from "./blob.type"
import { colors } from "@/lib/styles/colors"
import clsx from "clsx"

const Circle = ({ size, className }: CircleProps): ReactElement => {
	const [style, setStyle] = useState<CSSProperties>({})

	useEffect(() => {
		setStyle({
			...style,
			width: `${size}rem`,
			height: `${size}rem`,
			boxShadow: `0 0 ${size / 4}rem ${size / 4}rem ${colors.red}`,
			backgroundColor: colors.red
		})
	}, [size])

	return (
		<div
			style={style}
			className={clsx(
				className ?? "",
				"absolute -translate-x-1/2 -translate-y-1/2",
				"rounded-full"
			)}
		/>
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
		<div
			className={clsx(
				className ?? "",
				"blob"
			)}
		>
			<Circle size={actualSize} className="blob-circle-1" />
			<Circle size={actualSize} className="blob-circle-2" />
			<Circle size={actualSize} className="blob-circle-3" />
			<Circle size={actualSize} className="blob-circle-4" />
		</div>
	)
}