import { cn } from "../utils"

interface SeparatorProps {
    orientation: "vertical" | "horizontal"
    length: string
    className?: string
    corners?: boolean
}

const Separator = ({ orientation, length, className, corners }: SeparatorProps) => {
    const style = {
        width: orientation === "horizontal" ? length : "0.15rem",
        height: orientation === "vertical" ? length : "0.15rem"
    }

    return <div style={style} className= {cn(
        className ?? "",
        corners ? "" : "rounded-full",
        "bg-dark dark:bg-light transition-colors duration-500 self-stretch"
    )} />
}

export default Separator
