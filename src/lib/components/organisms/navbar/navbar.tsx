"use client"

import { useState, type ReactElement } from "react"
import { useLang } from "@/lib/hooks/lang"
import { useViewportStore } from "@/lib/stores/viewport"
import { useSectionsStore } from "@/lib/stores/sections"
import { breakpoints } from "@/lib/utils/style"
import { ThemeToggle } from "@/lib/components/atoms/theme-toggle"
import { LangToggle } from "@/lib/components/atoms/lang-toggle"
import clsx from "clsx"

export const Navbar = (): ReactElement => {
	const lang = useLang()

	const { width } = useViewportStore()

	const [isOpen, setIsOpen] = useState(false)

	const [selectedItem, setSelectedItem] = useState<string | null>(null)

	const sections = useSectionsStore(state => state.sections)

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
					// eslint-disable-next-line max-len
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
									// eslint-disable-next-line max-len
									<p className="text-6xl font-extrabold [color:transparent] stroke-dark dark:stroke-light italic transition-all duration-500" lang={lang.id}>{index + 1}</p>
									// eslint-disable-next-line max-len
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
					Object.entries(lang.navbar).map(([key, value], index) => (
						<a
							onMouseEnter={() => setSelectedItem(key)}
							onMouseLeave={() => setSelectedItem(null)}
							style={{ opacity: getLinkOpacity(key) }}
							onClick={(e) => {
								e.preventDefault()
								const ref = sections[key as keyof SectionsRefs]
								ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
							}}
							href=""
							key={index}
							lang={lang.id}
							className="cursor-pointer text-dark dark:text-light transition-all duration-500 text-xl uppercase"
						>
							{value}
						</a>
					))
				) : (
					<div
						style={mdLinkStyle}
						// eslint-disable-next-line max-len
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