import Separator from "../components/separator"
import langTexts from "../assets/lang.json"
import Arrow from "../components/svg/arrow"
import Project from "../components/project"
import Button from "../components/button"
import { projects } from "../assets/projects/projects"

interface ProjectsProps {
    lang: "fr" | "en"
}

const Projects = ({ lang }: ProjectsProps) => {
    return (
        <section
            id="projects"
            className="w-10/12 lg:w-9/12 bg-light dark:bg-dark transition-colors duration-500 pt-32 flex flex-col"
        >
            <div className="flex flex-row items-center justify-end">
                <Arrow direction="left" className="text-transition mr-2 lg:mr-6 h-7 sm:h-9 lg:h-11 fill-dark dark:fill-light transition-all duration-500" />
                <h2 className="text-transition uppercase font-semibold text-dark dark:text-light transition-all duration-500 text-4xl sm:text-5xl lg:text-6xl max-w-5/6 text-right">
                    {langTexts[lang].projects.title}
                </h2>
            </div>
            <Separator orientation="horizontal" length="100%" className="mt-4" />
            <div className="flex flex-col lg:flex-row items-start justify-strech w-full">
                <Project project={projects[0]} lang={lang} side="left" />
                <Project project={projects[1]} lang={lang} side="right" />
            </div>
            <Separator length="100%" orientation="horizontal" />
            <div className="flex flex-col lg:flex-row items-stretch justify-strech w-full">
                <Project project={projects[2]} lang={lang} side="left" />
                <Project project={projects[3]} lang={lang} side="right" />
            </div>
            <Separator length="100%" orientation="horizontal" className="mb-4" />
            <Button textTransition text={langTexts[lang].projects.button} height="2.5rem" className="w-fit self-center" link="https://github.com/maxencebonamy" />
        </section>
    )
}

export default Projects
