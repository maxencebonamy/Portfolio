"use client"

import type { ReactElement } from "react"
import type { HomeBlobProps } from "."
import { Blob } from "@/lib/components/atoms/blob"
import { computeBlobSize } from "./home-blob.util"
import { useViewportStore } from "@/lib/stores"

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