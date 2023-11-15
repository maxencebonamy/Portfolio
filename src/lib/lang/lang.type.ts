import type { ImportantSkill } from "@/assets/skills/skills"
import type { ProjectId } from "../data/projects"

export type Lang = "en" | "fr"

export type LangData = {
    id: Lang,
    navbar: {
        about: string,
        projects: string,
        skills: string,
        contact: string
    }
    home: [string, string, string]
    about: {
        title: string,
        content: string[]
    },
    projects: {
        title: string,
        button: string,
        see: string,
        content: {
            [key in ProjectId]: {
                title: string,
                description: string
            }
        }
    },
    skills: {
        title: string,
        content: {
            [key in ImportantSkill]: string
        }
    },
    contact: {
        title: string,
        content: string[]
    },
    footer: {
        content: string
    }
}