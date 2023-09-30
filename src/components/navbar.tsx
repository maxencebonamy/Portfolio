import { useState } from "react"
import ThemeToggle from "./toggle/theme-toggle"
import LangToggle from "./toggle/lang-toggle"
import langTexts from "../assets/lang.json"
import { BREAKPOINTS, cn } from "../utils"

interface NavbarProps {
    toggleTheme: () => void
    lang: "fr" | "en"
    toggleLang: () => void
    width: number
    children?: React.ReactNode
}

const Navbar = ({ toggleTheme, lang, toggleLang, width }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const [selectedItem, setSelectedItem] = useState<string | null>(null)

    const getLinkOpacity = (text: string) => {
        if (!isOpen) {
            return 0
        }
        if (selectedItem && selectedItem !== text) {
            return 0.5
        }
        return 1
    }

    const navListWidth =
        document.querySelector(".nav-list")?.clientWidth ?? width
    const openSpanStyle = {
        transform: `translateX(-${
            width >= BREAKPOINTS.lg ? navListWidth - 32 : width - 48 * 3
        }px)`,
    }
    const ulStyle = width >= BREAKPOINTS.lg ? {} : { width: "100%" }
    const mdLinkStyle = {
        opacity: isOpen ? "1" : "0",
    }

    return (
        <nav className="fixed w-full z-20 h-32 flex items-center justify-between px-12 gradient-bg">
            <span className="flex flex-row items-center justify-start gap-6">
                {width >= BREAKPOINTS.lg ? (
                    <>
                        <ThemeToggle toggleTheme={toggleTheme} />
                        <LangToggle lang={lang} toggleLang={toggleLang} />
                    </>
                ) : (
                    <></>
                )}
            </span>
            {
                width >= BREAKPOINTS.lg ? <></> : (
                    <div className={cn(isOpen ? "-translate-y-0" : "-translate-y-full", "fixed w-screen h-screen left-0 top-0 bg-light dark:bg-dark transition-all duration-500 z-10 mobile-nav flex flex-col items-center justify-center gap-8")}>
                        {
                            langTexts[lang].navbar.map((text, index) => (
                                <a
                                    href={`#${langTexts.en.navbar[
                                        index
                                    ].toLowerCase()}`}
                                    key={index}
                                    onClick={() => setIsOpen(false)}
                                    className="cursor-pointe flex flex-col items-center justify-start"
                                    lang={lang}
                                >
                                    <p className="text-6xl font-extrabold [color:transparent] stroke-dark dark:stroke-light italic transition-all duration-500" lang={lang}>{index + 1}</p>
                                    <p className="text-transition uppercase text-xl text-dark dark:text-light transition-all duration-500" lang={lang}>{text}</p>
                                </a>
                            ))
                        }
                    </div>
                )
            }
            <ul
                style={ulStyle}
                onMouseEnter={
                    width >= BREAKPOINTS.lg ? () => setIsOpen(true) : () => {}
                }
                onMouseLeave={
                    width >= BREAKPOINTS.lg ? () => setIsOpen(false) : () => {}
                }
                className="nav-list h-8 min-w-[3rem] flex items-center justify-center gap-8 px-20"
            >
                {width >= BREAKPOINTS.lg ? (
                    langTexts[lang].navbar.map((text, index) => (
                        <a
                            onMouseEnter={() => setSelectedItem(text)}
                            onMouseLeave={() => setSelectedItem(null)}
                            style={{ opacity: getLinkOpacity(text) }}
                            href={`#${langTexts.en.navbar[
                                index
                            ].toLowerCase()}`}
                            key={index}
                            lang={lang}
                            className="cursor-pointer text-dark dark:text-light transition-all duration-500 text-xl uppercase"
                        >
                            {text}
                        </a>
                    ))
                ) : (
                    <div
                        style={mdLinkStyle}
                        className={cn(width >= BREAKPOINTS.lg ? "" : "z-20", "flex flex-row justify-center items-center gap-8 transition-all duration-500")}
                    >
                        <ThemeToggle toggleTheme={toggleTheme} />
                        <LangToggle lang={lang} toggleLang={toggleLang} />
                    </div>
                )}

                <span
                    className={cn(
                        "absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[2.925rem] right-12 z-20",
                        isOpen ? "-rotate-45 translate-y-4" : ""
                    )}
                />
                <span
                    style={isOpen ? openSpanStyle : {}}
                    className="absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[3.925rem] right-12 z-20"
                />
                <span
                    className={cn(
                        "absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[4.925rem] right-12 z-20",
                        isOpen ? "rotate-45 -translate-y-4" : ""
                    )}
                />

                {width < BREAKPOINTS.lg ? (
                    <span
                        onClick={() => setIsOpen(!isOpen)}
                        className="absolute h-12 w-12 top-10 right-12 z-20"
                    />
                ) : (
                    <></>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
