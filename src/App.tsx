import { useEffect, useState } from "react"
import ThemeToggle from "./components/theme-toggle"
import Navbar from "./components/navbar"
import Home from "./sections/home";

function App() {
    // Lang

    const [lang, setLang] = useState("fr")

    const toggleLang = () => {
        if (lang === "en") {
            setLang("fr")
        }
        else if (lang === "fr") {
            setLang("en")
        }
    }

    // Theme
    const [theme, setTheme] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );

    if (theme === "dark") {
        document.getElementById("root")?.classList.add("dark");
    }

    const toggleTheme = () => {
        setTheme(() => (theme === "dark" ? "light" : "dark"));
        document.getElementById("root")?.classList.toggle("dark");
    };

    // Window Width

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
        <div className="h-full w-full select-none bg-light dark:bg-dark transition-colors duration-500">
            <Navbar toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />
            <Home lang={lang} />
            {/* <h1 className="[color:transparent] stroke-dark dark:stroke-light uppercase text-9xl italic font-bold">Ingénieur</h1> */}
        </div>
    );
}

export default App;
