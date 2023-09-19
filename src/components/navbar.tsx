import { useEffect, useState } from "react"
import ThemeToggle from "./theme-toggle"
import LangToggle from "./lang-toggle"
import langTexts from "../assets/lang.json"

interface NavbarProps {
    toggleTheme: () => void
    lang: "fr" | "en"
    toggleLang: () => void
    width: number
    children?: React.ReactNode
}

const Navbar = ({toggleTheme, lang, toggleLang, width}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const [selectedItem, setSelectedItem] = useState<string|null>(null)

    useEffect(() => {
        console.log(selectedItem)
    }, [selectedItem])

    const getOpacity = (text: string) => {
        if (!isOpen) {
            return 0
        }
        if (selectedItem && selectedItem !== text) {
            return 0.5
        }
        return 1
    }

    const navListWidth = document.querySelector(".nav-list")?.clientWidth

    return (
        <nav className="w-full z-20 h-32 flex items-center justify-between relative px-12">
            <span className="flex flex-row items-center justify-start gap-6">
                {
                    width >= 1024 ? <>
                        <ThemeToggle toggleTheme={toggleTheme} />
                        <LangToggle lang={lang} toggleLang={toggleLang} />
                    </> :
                    null
                }
            </span>
            <ul onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className={`nav-list h-8 min-w-[3rem] flex items-center justify-center gap-8 pr-20 kw-[${width >= 1024 ? "40rem" : (width - 48 * 3) + "px"}]`}>
                {
                    width >= 1024 ?
                    langTexts[lang].navbar.map(text => (
                        <a onMouseEnter={() => setSelectedItem(text)} onMouseLeave={() => setSelectedItem(null)} style={{opacity: getOpacity(text)}} className="cursor-pointer text-dark dark:text-light transition-all duration-500 text-xl uppercase">{text}</a>
                    )) :
                    <>
                        <ThemeToggle toggleTheme={toggleTheme} />
                        <LangToggle lang={lang} toggleLang={toggleLang} />
                    </>
                }
                <span className={`absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[2.925rem] right-12 ${isOpen ? "-rotate-45 translate-y-4" : ""}`} />
                <span style={isOpen ? {transform: `translateX(-${width >= 1024 ? (navListWidth + 32) : (width - 48 * 3)}px)`} : {}} className={`absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[3.925rem] right-12`} />
                <span className={`absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[4.925rem] right-12 ${isOpen ? "rotate-45 -translate-y-4" : ""}`} />
            </ul>
        </nav>
    )
}

export default Navbar