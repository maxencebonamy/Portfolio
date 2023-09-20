import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import Home from "./sections/home"
import About from "./sections/about"

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
        // document.getElementById("root")?.classList.add("dark")
        document.querySelector("body")?.classList.add("dark")
    }

    const toggleTheme = () => {
        setTheme(() => (theme === "dark" ? "light" : "dark"))
        // document.getElementById("root")?.classList.toggle("dark")
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
    }, [])

    return (
        <div className="w-full select-none bg-light dark:bg-dark transition-colors duration-500 flex items-center justify-start flex-col">
            <Navbar
                toggleTheme={toggleTheme}
                lang={lang}
                toggleLang={toggleLang}
                width={width}
            />
            <Home lang={lang} />
            <About lang={lang} />
        </div>
    )
}

export default App
