export type ProjectId = "sand_box" | "asynconf" | "aled" | "minecraft_survival"

export type Project = {
    id: ProjectId,
    video: string,
    link: string,
    skills: {name: string, id: string}[],
}

export const projects: Project[] = [
	{
		id: "sand_box",
		video: "/videos/sand_box.mp4",
		link: "https://github.com/maxencebonamy/Sand-Box",
		skills: [
			{ name: "C++", id: "cpp" },
			{ name: "SFML", id: "sfml" },
			{ name: "Xmake", id: "xmake" }
		]
	},
	{
		id: "asynconf",
		video: "./videos/asynconf.mp4",
		link: "https://asynconf.maxencebonamy.fr",
		skills: [
			{ name: "NextJS", id: "next" },
			{ name: "React", id: "react" },
			{ name: "TypeScript", id: "typescript" },
			{ name: "TailwindCSS", id: "tailwind" }
		]
	},
	{
		id: "aled",
		video: "./videos/aled.mp4",
		link: "https://aledandco.fr",
		skills: [
			{ name: "PHP", id: "php" },
			{ name: "WordPress", id: "wordpress" },
			{ name: "SQL", id: "sql" }
		]
	},
	{
		id: "minecraft_survival",
		video: "./videos/minecraft_survival.mp4",
		link: "https://github.com/maxencebonamy/Minecraft-Survival",
		skills: [
			{ name: "Python", id: "python" },
			{ name: "Pygame", id: "pygame" }
		]
	}
]