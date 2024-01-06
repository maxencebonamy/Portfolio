import { Navbar } from "@/lib/components/organisms/navbar"
import { About, Contact, Footer, Home, Projects, Skills } from "@/lib/sections"
import clsx from "clsx"
import type { ReactElement } from "react"

export default (): ReactElement => {
	const style = clsx(
		"w-full",
		"flex flex-col items-center justify-start",
		"bg-light dark:bg-dark select-none",
		"transition-colors duration-500"
	)

	return (
		<div className={style}>
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