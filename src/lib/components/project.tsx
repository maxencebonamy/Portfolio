/* eslint-disable max-len */
import type { ReactElement } from "react"
import { useState } from "react"
import { langData } from "@/lib/lang"
import { Project } from "@/assets/projects/projects"
import type { Skill } from "@/assets/skills/skills"
import { skillsImages, skillsLinks } from "@/assets/skills/skills"
import Button from "./button"
import ReactPlayer from "react-player"
import { Waypoint } from "react-waypoint"
import clsx from "clsx"

interface ProjectProps {
    project: Project
    lang: "fr" | "en"
    side: "left" | "right"
}

const Project = ({ project, lang, side }: ProjectProps): ReactElement => {
	const [playing, setPlaying] = useState(false)

	const handleEnterViewport = (): void => {
		setPlaying(true)
	}
	const handleExitViewport = (): void => {
		setPlaying(false)
	}

	return (
		<div
			className={clsx(
				"flex flex-col items-start justify-start gap-2 flex-1 py-4",
				side === "left"
					? "border-b-[0.1rem] lg:border-b-0 lg:pr-4 lg:border-r-[0.1rem] border-dark dark:border-light transition-all duration-500"
					: "lg:pl-4"
			)}
		>

			<Waypoint
				onEnter={handleEnterViewport}
				onLeave={handleExitViewport}
			>
				<div className="aspect-video rounded-2xl w-full mb-2 overflow-hidden">
					<ReactPlayer
						url={project.video}
						controls
						playing={playing}
						loop
						volume={0}
						width="100%"
						height="auto"
						fallback={<Button height="2rem" text="Hello" />}
					/>
				</div>
			</Waypoint>
			<div className="flex w-full flex-row items-center justify-start gap-x-4 gap-y-2 flex-wrap">
				<h3
					className="text-transition text-dark dark:text-light transition-all duration-500 text-2xl uppercase font-semibold"
					lang={lang}
				>
					{langData[lang].projects.content[project.id].title}
				</h3>
				<Button
					height="2rem"
					text={langData[lang].projects.see}
					link={project.link}
					textTransition
					lang={lang}
				/>
			</div>
			<p
				className="text-transition text-dark dark:text-light transition-all duration-500 text-md"
				lang={lang}
			>
				{langData[lang].projects.content[project.id].description}
			</p>
			<div className="flex flex-row items-center justify-start gap-4 flex-wrap">
				{project.skills.map(({ name, id }) => (
					<a
						key={id}
						href={skillsLinks[id as Skill]}
						className="h-8 rounded-full flex flex-row items-center justify-center border-2 border-dark dark:border-light transition-all duration-500 pl-[0.375rem] pr-2 gap-2"
					>
						<img
							className="h-5 rounded-md"
							src={skillsImages[id as Skill]}
							alt={id}
						/>
						<p className="text-md text-dark dark:text-light transition-all duration-500">
							{name}
						</p>
					</a>
				))}
			</div>
		</div>
	)
}

export default Project