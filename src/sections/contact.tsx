import Separator from "../components/separator"
import langTexts from "../assets/lang.json"
import Arrow from "../components/svg/arrow"

interface ContactProps {
    lang: "fr" | "en"
}

const Contact = ({ lang }: ContactProps) => {
    return (
        <section
            id="contact"
            className="w-11/12 lg:w-9/12 h-[500px] bg-light dark:bg-dark transition-colors duration-500 pt-32"
        >
            <div className="flex flex-row items-center justify-end">
                <Arrow sense="left" className="text-transition mr-6 h-11 fill-dark dark:fill-light transition-all duration-500" />
                <h2 className="text-transition uppercase font-semibold text-dark dark:text-light transition-all duration-500 text-6xl">
                    {langTexts[lang].contact.title}
                </h2>
            </div>
            <Separator orientation="horizontal" length="100%" className="my-4" />
        </section>
    )
}

export default Contact
