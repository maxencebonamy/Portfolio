import { breakpoints } from "@/lib/utils/style"

export const computeBlobSize = (viewportWidth: number): number => {
	if (viewportWidth >= breakpoints.LG) return 12
	if (viewportWidth >= breakpoints.SM) return 9
	return 8
}