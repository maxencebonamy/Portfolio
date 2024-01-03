export const toPascalCase = (str: string): string => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, _) => word.toUpperCase())
		.replace(/[\s-]/g, "")
}

export const toCamelCase = (str: string): string => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
		.replace(/[\s-]/g, "")
}