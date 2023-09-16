import { useState } from "react";
import ThemeToggle from "./components/theme-toggle";

function App() {
    const [theme, setTheme] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    )
    if (theme === "dark") {
        document.getElementById("root")?.classList.add("dark")
    }

    const toggleTheme = () => {
        setTheme(() => theme === "dark" ? "light" : "dark")
        document.getElementById("root")?.classList.toggle("dark")
    }

    return <div className="h-full bg-light dark:bg-dark transition-colors duration-300">
        <h1 className="text-red-400">Portfolio</h1>
        <ThemeToggle toggleTheme={toggleTheme} />
    </div>;
}

export default App;
