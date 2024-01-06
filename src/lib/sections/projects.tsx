"use client"

import Separator from "../components/separator"
import { langData } from "@/lib/lang"
import Project from "../components/project"
import Button from "../components/button"
import { projects } from "@/assets/projects/projects"
import { useRef, type ReactElement } from "react"
import { useLangStore, useSectionsStore } from "../stores"
import { OutlineArrow } from "../components/atoms/outline-arrow"

export const Projects = (): ReactElement => {
	const { lang } = useLangStore()

	const ref = useRef<HTMLElement>(null)
	const addSection = useSectionsStore(state => state.addSection)
	addSection("projects", ref)

	return (
		<section
			id="projects"
			className="w-10/12 lg:w-9/12 bg-light dark:bg-dark transition-colors duration-500 pt-32 flex flex-col"
			ref={ref}
		>
			<div className="flex flex-row items-end justify-end">
				<OutlineArrow direction="left" className="mb-[7px] lg:ml-6 h-7 sm:h-9 lg:h-11" />
				<h2 className="text-transition uppercase font-semibold text-dark dark:text-light transition-all duration-500 text-4xl sm:text-5xl lg:text-6xl max-w-5/6 text-right" lang={lang}>
					{langData[lang].projects.title}
				</h2>
			</div>
			<Separator length="100%" className="mt-4" />
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
			<Button textTransition text={langData[lang].projects.button} height="2.5rem" className="w-fit self-center" link="https://github.com/maxencebonamy" lang={lang} />
		</section>
	)
}