import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
    toggleTheme: () => void
}

const ThemeToggle = ({toggleTheme}: ThemeToggleProps) => {
    return (
        <div onClick={toggleTheme} className="w-16 h-8 bg-dark dark:bg-light rounded-full cursor-pointer transition-colors duration-300">
            <div className="w-6 h-6 rounded-full bg-light dark:bg-dark relative top-1 left-1 dark:translate-x-8 transition-all duration-300">
                <Sun className="w-5 h-5 text-dark dark:opacity-0 absolute top-0.5 left-0.5 transition-opacity duration-300" />
                <Moon className="w-5 h-5 text-light opacity-0 dark:opacity-100 absolute top-0.5 left-0.5 transition-opacity duration-300" />
            </div>
        </div>
    )
}

export default ThemeToggle