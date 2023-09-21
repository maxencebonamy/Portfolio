interface SeparatorProps {
    orientation: "vertical" | "horizontal"
    length: string
    className?: string
}

const Separator = ({ orientation, length, className }: SeparatorProps) => {
    const style = {
        width: orientation === "horizontal" ? length : "0.15rem",
        height: orientation === "vertical" ? length : "0.15rem"
    }

    return <div style={style} className={(className ?? "") + " rounded-full bg-dark dark:bg-light transition-colors duration-500"} />
}

export default Separator
