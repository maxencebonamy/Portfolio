import Navbar from "@/lib/components/navbar"
import { About, Home, Contact, Footer, Projects, Skills } from "@/lib/sections"
import type { ReactElement } from "react"

export default function Page(): ReactElement {
	return (
		<div className="w-full select-none bg-light dark:bg-dark transition-colors duration-500 flex items-center justify-start flex-col">
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</div>
	)
}