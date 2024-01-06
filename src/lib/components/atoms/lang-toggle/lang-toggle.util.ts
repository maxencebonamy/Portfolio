export const getLangElements = (): HTMLElement[] => {
	const root = document.querySelector<HTMLElement>("html")
	if (!root) return []

	return Array.from(root.querySelectorAll<HTMLElement>("[lang]"))
		.filter(item => item.style.opacity !== "0")
}