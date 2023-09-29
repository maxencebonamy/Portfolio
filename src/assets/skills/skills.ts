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

export type Skill = "c" | "cpp" | "git" | "java" | "javascript" | "php" | "pygame" | "python" | "react" | "sass" | "sfml" | "sql" | "tailwind" | "typescript" | "wordpress" | "xmake"

export type ImportantSkill = "c" | "cpp" | "git" | "java" | "php" | "python" | "react" | "tailwind" | "typescript"

export const skills = [
    "cpp", "php", "typescript", "tailwind", "react", "git", "c", "java", "python"
] as ImportantSkill[]

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
    xmake: xmake
}