export type ProjectId = "sand_box" | "asynconf" | "aled" | "minecraft_survival"

export type Project = {
    id: ProjectId,
    video: string,
    link: string,
    skills: {name: string, id: string}[],
}