"use client"

import Navbar from "@/lib/components/navbar"
import { About, Home, Contact, Footer, Projects, Skills } from "@/lib/sections"
import { type ReactElement, useRef } from "react"

export default function Page(): ReactElement {
	const sections = {
		about: useRef<HTMLElement>(null),
		projects: useRef<HTMLElement>(null),
		skills: useRef<HTMLElement>(null),
		contact: useRef<HTMLElement>(null)
	}

	return (
		<div className="w-full select-none bg-light dark:bg-dark transition-colors duration-500 flex items-center justify-start flex-col">
			<Navbar
				sectionsRefs={sections}
			/>
			<Home />
			<About appRef={sections.about} />
			<Projects appRef={sections.projects} />
			<Skills appRef={sections.skills} />
			<Contact appRef={sections.contact} />
			<Footer />
		</div>
	)
}