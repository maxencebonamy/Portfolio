interface SeparatorProps {
    orientation: "vertical" | "horizontal"
    length: string
    className?: string
}

const Separator = ({ orientation, length, className }: SeparatorProps) => {
    const style = {
        width: orientation === "horizontal" ? length : "1px",
        height: orientation === "vertical" ? length : "1px"
    }

    return <div style={style} className={className ?? "" + " rounded-full bg-dark dark:bg-light"} />
}

export default Separator
