import Separator from "../components/separator"

interface AboutProps {
    lang: "fr" | "en"
}

const About = ({ lang }: AboutProps) => {
    return (
        <section className="w-11/12 lg:w-5/6 h-[500px] bg-light dark:bg-dark">
            <div></div>
            {/* <Separator orientation="horizontal" length="100%" /> */}
        </section>
    )
}

export default About
