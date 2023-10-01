import sand_box from "../projects/sand_box.mp4"
import bde_eseo from "../projects/bde_eseo.mp4"
import aled from "../projects/aled.mp4"
import minecraft_survival from "../projects/minecraft_survival.mp4"

export type ProjectId = "sand_box" | "bde_eseo" | "aled" | "minecraft_survival"

export type Project = {
    id: ProjectId,
    video: string,
    link: string,
    skills: {name: string, id: string}[],
}

export const projects = [
    {
        id: "sand_box",
        video: sand_box,
        link: "https://github.com/maxencebonamy/Sand-Box",
        skills: [
            { name: "C++", id: "cpp" },
            { name: "SFML", id: "sfml" },
            { name: "Xmake", id: "xmake" }
        ]
    },
    {
        id: "bde_eseo",
        video: bde_eseo,
        link: "https://bdeeseo.maxencebonamy.fr",
        skills: [
            { name: "JavaScript", id: "javascript" },
            { name: "React", id: "react" },
            { name: "SASS", id: "sass" }
        ]
    },
    {
        id: "aled",
        video: aled,
        link: "https://aledandco.fr",
        skills: [
            { name: "PHP", id: "php" },
            { name: "WordPress", id: "wordpress" },
            { name: "SQL", id: "sql" }
        ]
    },
    {
        id: "minecraft_survival",
        video: minecraft_survival,
        link: "https://github.com/maxencebonamy/Minecraft-Survival",
        skills: [
            { name: "Python", id: "python" },
            { name: "Pygame", id: "pygame" }
        ]
    }
] as Project[]