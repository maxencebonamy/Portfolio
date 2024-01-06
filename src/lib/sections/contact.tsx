"use client"

/* eslint-disable max-len */
import Separator from "../components/separator"
import { langData } from "@/lib/lang"
import Button from "../components/button"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import Logo from "../components/atoms/svg/logo"
import { useRef, type ReactElement } from "react"
import { useLangStore, useSectionsStore } from "../stores"
import { OutlineArrow } from "../components/atoms/outline-arrow"
import { Blob } from "@/lib/components/atoms/blob"

export const Contact = (): ReactElement => {
	const { lang } = useLangStore()

	const ref = useRef<HTMLElement>(null)
	const addSection = useSectionsStore(state => state.addSection)
	addSection("contact", ref)

	return (
		<section
			id="contact"
			className="w-10/12 lg:w-9/12 bg-light dark:bg-dark transition-colors duration-500 pt-32"
			ref={ref}
		>
			<div className="flex flex-row items-end justify-end">
				<OutlineArrow direction="left" className="mb-[7px] lg:ml-6 h-7 sm:h-9 lg:h-11" />
				<h2 className="text-transition uppercase font-semibold text-dark dark:text-light transition-all duration-500 text-4xl sm:text-5xl lg:text-6xl max-w-5/6 text-right" lang={lang}>
					{langData[lang].contact.title}
				</h2>
			</div>
			<Separator length="100%" className="relative z-10 my-4" />
			<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
				<div className="h-32 relative">
					<Blob size={6} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
					<Logo className="relative z-10 h-full fill-dark dark:fill-light transition-colors duration-500" />
				</div>
				<div className="w-full lg:w-fit flex flex-col items-start justify-start">
					{
						langData[lang].contact.content.map((item) => (
							<p className="text-transition text-dark dark:text-light transition-all duration-500 text-md" key={item} lang={lang}>{item}</p>
						))
					}
					<div className="flex flex-row flex-wrap items-center justify-start gap-4 my-4">
						<Button height="2.5rem" text="Mail" link="mailto:maxencebonamy@gmail.com">
							<Mail className="text-dark dark:text-light transition-all duration-500 h-full" />
						</Button>
						<Button height="2.5rem" text="Linkedin" link="https://linkedin.com/in/maxencebonamy/">
							<Linkedin className="text-dark dark:text-light transition-all duration-500 h-full" />
						</Button>
						<Button height="2.5rem" text="GitHub" link="https://github.com/maxencebonamy">
							<Github className="text-dark dark:text-light transition-all duration-500 h-full" />
						</Button>
						<Button height="2.5rem" text="Instagram" link="https://instagram.com/maxencebonamy">
							<Instagram className="text-dark dark:text-light transition-all duration-500 h-full" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}