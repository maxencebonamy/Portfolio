import { useEffect, useState } from "react"
import ThemeToggle from "./theme-toggle"
import LangToggle from "./lang-toggle"

interface NavbarProps {
    toggleTheme: () => void
    lang: "fr" | "en"
    toggleLang: () => void
    children?: React.ReactNode
}

const Navbar = ({toggleTheme, lang, toggleLang}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full z-20 h-32 flex items-center justify-between relative px-12">
            <span className="flex flex-row items-center justify-start gap-6">
                <ThemeToggle toggleTheme={toggleTheme} />
                <LangToggle lang={lang} toggleLang={toggleLang} />
            </span>
            <ul onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="h-8 min-w-[3rem]">
                <span className={`absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[2.925rem] right-12 ${isOpen ? "rotate-45 translate-y-4" : ""}`} />
                <span className={`absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[3.925rem] right-12 ${isOpen ? "-translate-x-full" : ""}`} />
                <span className={`absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[4.925rem] right-12 ${isOpen ? "-rotate-45 -translate-y-4" : ""}`} />
            </ul>
        </nav>
    )
}

export default Navbar