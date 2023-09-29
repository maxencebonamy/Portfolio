import Separator from "../components/separator"
import langTexts from "../assets/lang.json"
import Arrow from "../components/svg/arrow"
import photo from "../assets/photo.png"
import { BREAKPOINTS } from "../utils"

interface AboutProps {
    lang: "fr" | "en"
    width: number
}

const About = ({ lang, width }: AboutProps) => {
    return (
        <section
            id="about"
            className="w-10/12 lg:w-9/12 bg-light dark:bg-dark transition-colors duration-500 pt-32"
        >
            <div className="flex flex-row items-end justify-start">
                <h2 className="text-transition uppercase font-semibold text-dark dark:text-light transition-all duration-500 text-4xl sm:text-5xl lg:text-6xl max-w-5/6 text-left">
                    {langTexts[lang].about.title}
                </h2>
                <Arrow direction="right" className="text-transition mb-[7px] lg:ml-6 h-7 sm:h-9 lg:h-11 fill-dark dark:fill-light transition-all duration-500" />
            </div>
            <div className="flex flex-row items-center justify-between">
                {
                    width >= BREAKPOINTS.lg ? <>
                        <Separator orientation="horizontal" length="75%" className="my-4" />
                        <Separator orientation="horizontal" length="10%" className="my-4" />
                    </> :
                        <Separator orientation="horizontal" length="100%" className="my-4" />
                }
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
                <div className="flex flex-col items-start justify-center">
                    {
                        langTexts[lang].about.texts.map((item, index) => (
                            <p className="text-transition transition-all duration-500 text-md text-dark dark:text-light" key={item}>
                                {index > 0 ? <br /> : <></>}
                                {item}
                            </p>
                        ))
                    }
                </div>
                <img className="w-10/12 sm:w-1/2 lg:w-1/3 -mb-4 lg:-mt-24 lg:self-end" src={photo} alt="Photo" />
            </div>
            <Separator orientation="horizontal" length="100%" className="my-4" />
        </section>
    )
}

export default About
