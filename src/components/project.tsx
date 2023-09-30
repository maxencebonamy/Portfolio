import langTexts from "../assets/lang.json"
import { Project } from "../assets/projects/projects"
import { Skill, skillsImages } from "../assets/skills/skills"
import { cn } from "../utils"
import Button from "./button"
import ReactPlayer from "react-player"

interface ProjectProps {
    project: Project,
    lang: "fr" | "en",
    side: "left" | "right"
}

const Project = ({ project, lang, side }: ProjectProps) => {
    return (
        <div className={cn(
            "flex flex-col items-start justify-start gap-2 flex-1 py-4",
            side === "left" ? "border-b-[0.1rem] lg:border-b-0 lg:pr-4 lg:border-r-[0.1rem] border-dark dark:border-light transition-all duration-500" : "lg:pl-4"
            )}>
            <div className="aspect-video rounded-2xl w-full mb-2 overflow-hidden">
                <ReactPlayer
                    url={project.video}
                    controls
                    playing
                    loop
                    volume={0}
                    width="100%"
                    height="auto"
                    fallback={
                        <Button height="2rem" text="Hello" />
                    }
                />
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-x-4 gap-y-2 flex-wrap">
                <h3 className="text-transition text-dark dark:text-light transition-all duration-500 text-2xl uppercase font-semibold" lang={lang}>
                    {langTexts[lang].projects[project.id].title}
                </h3>
                <Button height="2rem" text={langTexts[lang].projects.check} link={project.link} textTransition lang={lang} />
            </div>
            <p className="text-transition text-dark dark:text-light transition-all duration-500 text-md" lang={lang}>
                {langTexts[lang].projects[project.id].description}
            </p>
            <div className="flex flex-row items-center justify-start gap-4 flex-wrap">
                {
                    project.skills.map(({ name, id }) => (
                        <div key={id} className="h-8 rounded-full flex flex-row items-center justify-center border-2 border-dark dark:border-light transition-all duration-500 pl-1 pr-2 gap-2">
                            <img className="h-6 rounded-md" src={skillsImages[id as Skill]} alt={id} />
                            <p className="text-md text-dark dark:text-light transition-all duration-500">
                                {name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Project