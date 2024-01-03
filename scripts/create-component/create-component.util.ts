import type { CreateComponentArgs } from "./create-component.type"

export const typeToFolder = (type: CreateComponentArgs["type"]): string => {
	return type !== null ? `${type}s` : ""
}