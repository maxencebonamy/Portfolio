import Blob from "../components/blob"
import Logo from "../components/svg/logo"
import Mouse from "../components/mouse"
import langTexts from "../assets/lang.json"
import { BREAKPOINTS } from "../utils"

interface HomeProps {
    lang: "fr" | "en"
    width: number
}

const Home = ({ lang, width }: HomeProps) => {
    return (
        <section className="w-full h-screen flex items-center justify-center flex-col gap-3">
            <Blob
                size={
                    width >= BREAKPOINTS.lg ? 12 :
                    width >= BREAKPOINTS.sm ? 9 :
                    8
                }
                className="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <Logo className="z-10 h-1/6 md:h-1/5 lg:h-1/4 fill-dark dark:fill-light transition-colors duration-500 mb-3" />
            <span className="flex items-center flex-col lg:flex-row justify-center gap-3 lg:gap-6">
                <h1 className="text-transition z-10 uppercase text-dark dark:text-light transition-all duration-500 text-6xl md:text-7xl lg:text-8xl font-light">
                    {langTexts[lang].home[0]}
                </h1>
                <h1 className="text-transition z-10 uppercase transition-all duration-500 text-6xl md:text-7xl lg:text-8xl font-extrabold [color:transparent] stroke-dark dark:stroke-light italic">
                    {langTexts[lang].home[1]}
                </h1>
            </span>
            <h1 className="text-transition z-10 uppercase text-dark dark:text-light transition-all duration-500 text-6xl md:text-7xl lg:text-8xl font-bold">
                {langTexts[lang].home[2]}
            </h1>
            <Mouse
                size={4}
                className="absolute left-1/2 -translate-x-1/2 bottom-12"
            />
        </section>
    )
}

export default Home
