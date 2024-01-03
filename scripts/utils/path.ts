import fs from "fs"
import path from "path"

export const exists = (route: string): boolean => {
	return fs.existsSync(route)
}

export const createFolderIfNotExists = (route: string): void => {
	if (!fs.existsSync(route)) {
		fs.mkdirSync(route)
	}
}

export const createMultipleFoldersIfNotExist = (route: string): void => {
	const folderSegments = route.split("\\")

	let currentPath = ""

	for (const segment of folderSegments) {
		currentPath = path.join(currentPath, segment)
		createFolderIfNotExists(currentPath)
	}
}

export const createFileIfNotExists = (route: string, content: string): void => {
	if (!fs.existsSync(route)) {
		fs.writeFileSync(route, content)
	}
}

export const appendOrCreateFile = (route: string, content: string): void => {
	if (fs.existsSync(route)) {
		fs.appendFileSync(route, content)
	} else {
		fs.writeFileSync(route, content)
	}
}