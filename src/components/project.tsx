import langTexts from "../assets/lang.json"
import { Project } from "../assets/projects/projects"
import Button from "./button"
import ReactPlayer from "react-player"

interface ProjectProps {
    project: Project,
    lang: "fr" | "en"
}

const Project = ({ project, lang }: ProjectProps) => {
    return (
        <div className="flex flex-col items-start justify-start gap-2 flex-1 my-4">
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
            <div className="flex w-full flex-row items-center justify-start gap-4">
                <h3 className="text-transition text-dark dark:text-light transition-all duration-500 text-2xl uppercase font-semibold">
                    {langTexts[lang].projects[project.id].title}
                </h3>
                <Button height="2rem" text={langTexts[lang].projects.check} link={project.link} textTransition />
            </div>
            <p className="text-transition text-dark dark:text-light transition-all duration-500 text-md">
                {langTexts[lang].projects[project.id].description}
            </p>
        </div>
    )
}

export default Project