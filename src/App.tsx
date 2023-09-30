import { useEffect, useRef, useState } from "react"
import Navbar from "./components/navbar"
import Home from "./sections/home"
import About from "./sections/about"
import Contact from "./sections/contact"
import Footer from "./sections/footer"
import Skills from "./sections/skills"
import Projects from "./sections/projects"

function App() {
    // Lang

    const [lang, setLang] = useState<"fr" | "en">("fr")

    const toggleLang = () => {
        if (lang === "en") {
            setLang("fr")
        } else if (lang === "fr") {
            setLang("en")
        }
    }

    // Theme

    const [theme, setTheme] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    )

    if (theme === "dark") {
        document.querySelector("body")?.classList.add("dark")
    }

    const toggleTheme = () => {
        setTheme(() => (theme === "dark" ? "light" : "dark"))
        document.querySelector("body")?.classList.toggle("dark")
    }

    // Width

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleWindowResize)

        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    }, [width])

    // Sections References

    const sections = {
        about: useRef<HTMLElement>(null),
        projects: useRef<HTMLElement>(null),
        skills: useRef<HTMLElement>(null),
        contact: useRef<HTMLElement>(null)
    }

    return (
        <div className="w-full select-none bg-light dark:bg-dark transition-colors duration-500 flex items-center justify-start flex-col">
            <Navbar
                toggleTheme={toggleTheme}
                lang={lang}
                toggleLang={toggleLang}
                width={width}
                sectionsRefs={sections}
            />
            <Home lang={lang} width={width} />
            <About lang={lang} width={width} appRef={sections.about} />
            <Projects lang={lang} appRef={sections.projects} />
            <Skills lang={lang} appRef={sections.skills} />
            <Contact lang={lang} appRef={sections.contact} />
            <Footer lang={lang} />
        </div>
    )
}

export default App
