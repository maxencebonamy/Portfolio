"use client"

import type { ReactElement } from "react"
import { Blob } from "@/lib/components/atoms/blob"
import { useViewportStore } from "@/lib/stores"
import type { HomeBlobProps } from "."
import { computeBlobSize } from "./home-blob.util"

export const HomeBlob = ({ className }: HomeBlobProps): ReactElement => {
	const { width } = useViewportStore()
	const blobSize = computeBlobSize(width)

	return (
		<Blob
			size={blobSize}
			className={className ?? ""}
		/>
	)
}