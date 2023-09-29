import langTexts from "../assets/lang.json"

interface FooterProps {
    lang: "fr" | "en"
}


const Footer = ({ lang }: FooterProps) => {
    return (
        <footer className="flex flex-col items-center justify-center w-full py-20 mt-32">
            <p className="text-dark dark:text-light transition-all duration-500 text-md">© Maxence Bonamy 2023</p>
            <p className="text-transition text-dark dark:text-light transition-all duration-500 text-md text-center mt-2">{langTexts[lang].footer.build}</p>
        </footer>
    )
}

export default Footer