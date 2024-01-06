"use client"

import { useViewportStore } from "@/lib/stores"
import type { ReactElement } from "react"
import Separator from "../../../separator"
import { breakpoints } from "@/lib/utils/style"

export const AboutSeparator = (): ReactElement =>  {
	const width = useViewportStore(state => state.width)

	return (
		<div className="flex flex-row items-center justify-between w-full">
			{
				width >= breakpoints.LG ? <>
					<Separator length="75%" className="my-4 w-3/4" />
					<Separator length="10%" className="my-4 w-[10%]" />
				</>
					: <Separator length="100%" className="my-4 w-full" />
			}
		</div>
	)
}