/* eslint-disable max-len */
import type { ReactElement } from "react"
import { useState } from "react"
import ThemeToggle from "./toggle/theme-toggle"
import LangToggle from "./toggle/lang-toggle"
import { breakpoints } from "../utils"
import clsx from "clsx"
import { useViewportStore } from "../stores"
import { useLang } from "../hooks/lang"

type SectionsRefs = {
    about: React.RefObject<HTMLElement>,
    projects: React.RefObject<HTMLElement>,
    skills: React.RefObject<HTMLElement>,
    contact: React.RefObject<HTMLElement>
}

interface NavbarProps {
    sectionsRefs: SectionsRefs
    children?: React.ReactNode
}

const Navbar = ({ sectionsRefs }: NavbarProps): ReactElement => {
	const lang = useLang()

	const { width } = useViewportStore()

	const [isOpen, setIsOpen] = useState(false)

	const [selectedItem, setSelectedItem] = useState<string | null>(null)

	const getLinkOpacity = (text: string): number => {
		if (!isOpen) {
			return 0
		}
		if (selectedItem && selectedItem !== text) {
			return 0.5
		}
		return 1
	}

	const navListWidth
        = document.querySelector(".nav-list")?.clientWidth ?? width
	const openSpanStyle = {
		transform: `translateX(-${
			width < breakpoints.LG ? width - 48 * 3 : navListWidth - 32
		}px)`
	}
	const ulStyle = width >= breakpoints.LG ? {} : { width: "100%" }
	const mdLinkStyle = {
		opacity: isOpen ? "1" : "0"
	}

	return (
		<nav className="fixed w-full z-20 h-32 flex items-center justify-between px-12 gradient-bg">
			<span className="flex flex-row items-center justify-start gap-6">
				{width >= breakpoints.LG ? (
					<>
						<ThemeToggle />
						<LangToggle />
					</>
				) : (
					<></>
				)}
			</span>
			{
				width >= breakpoints.LG ? <></> : (
					<div className={clsx(isOpen ? "-translate-y-0" : "-translate-y-full", "fixed w-screen h-screen left-0 top-0 bg-light dark:bg-dark transition-all duration-500 z-10 mobile-nav flex flex-col items-center justify-center gap-8")}>
						{
							Object.entries(lang.navbar).map((text, index) => (
								<a
									href=""
									key={index}
									onClick={(e) => {
										e.preventDefault()
										const ref = sectionsRefs[lang.navbar[index].toLowerCase() as keyof SectionsRefs]
										ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
										setIsOpen(false)
									}}
									className="cursor-pointe flex flex-col items-center justify-start"
									lang={lang.id}
								>
									<p className="text-6xl font-extrabold [color:transparent] stroke-dark dark:stroke-light italic transition-all duration-500" lang={lang.id}>{index + 1}</p>
									<p className="text-transition uppercase text-xl text-dark dark:text-light transition-all duration-500" lang={lang.id}>{text}</p>
								</a>
							))
						}
					</div>
				)
			}
			<ul
				style={ulStyle}
				onMouseEnter={
					width >= breakpoints.LG ? () => setIsOpen(true) : () => void {}
				}
				onMouseLeave={
					width >= breakpoints.LG ? () => setIsOpen(false) : () => void {}
				}
				className="nav-list h-8 min-w-[3rem] flex items-center justify-center gap-8 px-20"
			>
				{width >= breakpoints.LG ? (
					Object.entries(lang.navbar).map((text, index) => (
						<a
							onMouseEnter={() => setSelectedItem(text)}
							onMouseLeave={() => setSelectedItem(null)}
							style={{ opacity: getLinkOpacity(text) }}
							onClick={(e) => {
								e.preventDefault()
								const ref = sectionsRefs[langData.en.navbar[index].toLowerCase() as keyof SectionsRefs]
								ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
							}}
							href=""
							key={index}
							lang={lang}
							className="cursor-pointer text-dark dark:text-light transition-all duration-500 text-xl uppercase"
						>
							{text}
						</a>
					))
				) : (
					<div
						style={mdLinkStyle}
						className={clsx(width >= breakpoints.LG ? "" : "z-20", "flex flex-row justify-center items-center gap-8 transition-all duration-500")}
					>
						<ThemeToggle />
						<LangToggle />
						{
							isOpen ? <></> : <span className="absolute h-full w-full bottom-0 left-0 z-20" />
						}
					</div>
				)}

				<span
					className={clsx(
						"absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[2.925rem] right-12 z-20",
						isOpen ? "-rotate-45 translate-y-4" : ""
					)}
				/>
				<span
					style={isOpen ? openSpanStyle : {}}
					className="absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[3.925rem] right-12 z-20"
				/>
				<span
					className={clsx(
						"absolute transition-all duration-500 h-[0.15rem] w-12 bg-dark dark:bg-light rounded-full top-[4.925rem] right-12 z-20",
						isOpen ? "rotate-45 -translate-y-4" : ""
					)}
				/>

				{width < breakpoints.LG ? (
					<span
						onClick={() => setIsOpen(!isOpen)}
						className="absolute h-12 w-12 top-10 right-12 z-20"
					/>
				) : (
					<></>
				)}
			</ul>
		</nav>
	)
}

export default Navbar