import { useState } from "react"

interface LangToggleProps {
    lang: "fr" | "en"
    toggleLang: () => void
    className?: string
}

const LangToggle = ({ lang, toggleLang, className }: LangToggleProps) => {
    const [isRotating, setIsRotating] = useState(false)

    const handleClick = () => {
        toggleLang()
        setIsRotating(true)

        window.setTimeout(() => {
            setIsRotating(false)
        }, 500)
    }

    return (
        <div
            onClick={handleClick}
            className={className ?? "" + " flex items-center justify-start flex-row gap-2 cursor-pointer"}
        >
            <p className="uppercase text-dark dark:text-light text-xl transition-colors duration-500">
                {lang}
            </p>
            <p
                className={`arrow-lang text-dark dark:text-light text-2xl transition-colors duration-500 rotate-90 ${
                    isRotating ? "rotate-animation" : ""
                }`}
            >
                {">"}
            </p>
        </div>
    )
}

export default LangToggle
