import c from "./c.png"
import cpp from "./cpp.png"
import git from "./git.png"
import java from "./java.png"
import php from "./php.png"
import python from "./python.png"
import react from "./react.png"
import tailwind from "./tailwind.png"
import typescript from "./typescript.png"

export type Skill = "c" | "cpp" | "git" | "java" | "php" | "python" | "react" | "tailwind" | "typescript"

export const skills = [
    "cpp", "php", "typescript", "tailwind", "react", "git", "c", "java", "python"
] as Skill[]

export const skillsImages = {
    c: c,
    cpp: cpp,
    git: git,
    java: java,
    php: php,
    python: python,
    react: react,
    tailwind: tailwind,
    typescript: typescript
}