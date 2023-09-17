interface LangToggleProps {
    lang: "fr" | "en"
    toggleLang: () => void
}

const LangToggle = ({lang, toggleLang}: LangToggleProps) => {
    return (
        <div onClick={toggleLang} className="flex items-center justify-start flex-row gap-2 cursor-pointer">
            <p className="uppercase text-dark dark:text-light text-xl transition-colors duration-500">{lang}</p>
            <p className=" text-dark dark:text-light text-2xl transition-colors duration-500 rotate-90">{">"}</p>
        </div>
    )
}

export default LangToggle