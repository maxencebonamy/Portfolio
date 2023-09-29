import c from "./c.png"
import cpp from "./cpp.png"
import git from "./git.png"
import java from "./java.png"
import javascript from "./javascript.png"
import php from "./php.png"
import pygame from "./pygame.png"
import python from "./python.png"
import react from "./react.png"
import sass from "./sass.png"
import sfml from "./sfml.png"
import sql from "./sql.png"
import tailwind from "./tailwind.png"
import typescript from "./typescript.png"
import wordpress from "./wordpress.png"
import xmake from "./xmake.png"

export type Skill =
    | "c"
    | "cpp"
    | "git"
    | "java"
    | "javascript"
    | "php"
    | "pygame"
    | "python"
    | "react"
    | "sass"
    | "sfml"
    | "sql"
    | "tailwind"
    | "typescript"
    | "wordpress"
    | "xmake"

export type ImportantSkill =
    | "c"
    | "cpp"
    | "git"
    | "java"
    | "php"
    | "python"
    | "react"
    | "tailwind"
    | "typescript"

export const skills = [
    {
        name: "cpp",
        color: "#00599c",
    },
    {
        name: "php",
        color: "#8c93be",
    },
    {
        name: "typescript",
        color: "#3178c6",
    },
    {
        name: "tailwind",
        color: "#38bdf8",
    },
    {
        name: "react",
        color: "#61dafb",
    },
    {
        name: "git",
        color: "#f05133",
    },
    {
        name: "c",
        color: "#00599c",
    },
    {
        name: "java",
        color: "#ea2d2e",
    },
    {
        name: "python",
        color: "#ffc331",
    },
] as { name: ImportantSkill; color: string }[]

export const skillsImages = {
    c: c,
    cpp: cpp,
    git: git,
    java: java,
    javascript: javascript,
    php: php,
    pygame: pygame,
    python: python,
    react: react,
    sass: sass,
    sfml: sfml,
    sql: sql,
    tailwind: tailwind,
    typescript: typescript,
    wordpress: wordpress,
    xmake: xmake,
}
