import { ReactNode } from "react"
import { cn } from "../utils"
import { ArrowRight } from "lucide-react"

interface ButtonProps {
    children?: ReactNode
    className?: string
    height: string
    text: string
    link?: string
    textTransition?: boolean
}

const Button = ({ children, className, height, text, link, textTransition }: ButtonProps) => {
    return (
        <a
            href={link}
            target="_blank"
            style={{height: height}}
            className={cn(
                className ?? "",
                "flex flex-row items-center justify-evenly gap-2 px-2 py-0 group cursor-pointer",
                "border-dark dark:border-light rounded-full border-2 transition-colors duration-500",
    
            )}
        >
            {children}
            <p className={"text-dark dark:text-light align-top text-lg font-semibold transition-all duration-500" + (textTransition ? " text-transition" : "")}>{text}</p>
            <ArrowRight className="text-dark dark:text-light transition-all duration-500 group-hover:-rotate-45 h-full" />
        </a>
    )
}

export default Button
