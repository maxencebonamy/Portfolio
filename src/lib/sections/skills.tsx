/* eslint-disable max-len */
import Separator from "../components/separator"
import { langData } from "@/lib/lang"
import { skills, skillsImages } from "@/assets/skills/skills"
import type { ReactElement } from "react"
import { useEffect, useRef, useState } from "react"
import Turn from "../components/atoms/svg/turn"
import clsx from "clsx"
import { useLangStore } from "../stores"
import { OutlineArrow } from "../components/atoms/outline-arrow"

interface SkillsProps {
    appRef: React.RefObject<HTMLElement>
}

export const Skills = ({ appRef }: SkillsProps): ReactElement => {
	const [skill, setSkill] = useState(0)
	const nbSkills = skills.length
	const [canTurn, setCanTurn] = useState(true)

	const { lang } = useLangStore()

	const textComponent = useRef<HTMLDivElement>(null)
	const [skillName, setSkillName] = useState(langData[lang].skills.content[skills[skill].name])
	const [skillDescription, setSkillDescription] = useState(langData[lang].skills.content[skills[skill].name])

	useEffect(() => {
		setSkillDescription(langData[lang].skills.content[skills[skill].name])
	}, [lang])

	const setSkillWithTransition = (index: number) => {
		if (canTurn && index !== skill) {
			setCanTurn(false)
			setSkill(index)
			if (textComponent.current) textComponent.current.style.opacity = "0"
		}
	}

	const onSkillClick = (index: number) => {
		setSkillWithTransition(index)
	}

	const nextSkill = () => {
		if (skill === nbSkills - 1) {
			setSkillWithTransition(0)
		} else {
			setSkillWithTransition(skill + 1)
		}
	}

	let getSkillPosition = (index: number) => ({
		top: `${
			(1 - Math.sin(((index - skill) / nbSkills) * 2 * Math.PI)) * 9.5
            + 0.75
		}rem`,
		left: `${
			(1 + Math.cos(((index - skill) / nbSkills) * 2 * Math.PI)) * 9.5
            + 0.75
		}rem`
	})

	useEffect(() => {
		getSkillPosition = (index: number) => ({
			top: `${
				(1 - Math.sin(((index - skill) / nbSkills) * 2 * Math.PI))
                    * 9.5
                + 0.75
			}rem`,
			left: `${
				(1 + Math.cos(((index - skill) / nbSkills) * 2 * Math.PI))
                    * 9.5
                + 0.75
			}rem`
		})

		const firstTimeout = setTimeout(() => {
			setSkillName(langData[lang].skills.content[skills[skill].name])
			setSkillDescription(langData[lang].skills.content[skills[skill].name])
			if (textComponent.current) textComponent.current.style.opacity = "1"
		}, 250)

		const secondTimeout = setTimeout(() => {
			setCanTurn(true)
		}, 500)

		return () => {
			clearTimeout(firstTimeout)
			clearTimeout(secondTimeout)
		}
	}, [skill])

	useEffect(() => {
		const interval = setInterval(() => {
			nextSkill()
		}, 7500)
		return () => clearInterval(interval)
	}, [canTurn])

	return (
		<section
			id="skills"
			className="w-10/12 lg:w-9/12 bg-light dark:bg-dark transition-colors duration-500 pt-32"
			ref={appRef}
		>
			<div className="flex flex-row items-end justify-start">
				<h2 className="text-transition uppercase font-semibold text-dark dark:text-light transition-all duration-500 text-4xl sm:text-5xl lg:text-6xl text-left" lang={lang}>
					{langData[lang].skills.title}
				</h2>
				<OutlineArrow direction="right" className="mb-[7px] lg:ml-6 h-7 sm:h-9 lg:h-11" />
			</div>
			<Separator
				orientation="horizontal"
				length="100%"
				className="my-4"
			/>
			<div className="flex flex-row items-center justify-start overflow-hidden relative min-h-[24rem]">
				<div className="absolute w-96 h-96 -translate-x-1/2 skills-wheel top-0 left-0">
					<div className="absolute w-96 h-96 rounded-full border-2 border-dark dark:border-light transition-all duration-500" />
					<div className="absolute w-56 h-56 rounded-full border-2 border-dark dark:border-light transition-all duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
					<div className={clsx("absolute h-56 w-56 rounded-full right-10 top-1/2 -translate-y-1/2 translate-x-1/2 transition-all duration-500 opacity-0")} style={{ background: `radial-gradient(${skills[skill].color} 0%, transparent 70%` }} />
					<Turn className="absolute bottom-0 right-0 transition-all duration-500 h-16 w-16 call-to-action cursor-pointer text-dark dark:text-light opacity-75 hover:opacity-100" onClick={nextSkill} />
					{skills.map((item, index) => (
						<div
							key={index}
							className={clsx(index === skill ? "h-28 w-28 -translate-x-8 -translate-y-8" : "h-14 w-14", "absolute transition-all duration-500 cursor-pointer")}
							style={getSkillPosition(index)}
							onClick={() => onSkillClick(index)}
						>
							<img
								src={skillsImages[item.name]}
								alt={langData[lang].skills.content[item.name]}
								className={clsx(index === skill ? "h-28 w-28" : "h-14 w-14", "transition-all duration-500")}
							/>
						</div>
					))}
				</div>
				<div className="flex flex-col items-center justify-start w-full mt-96 sm:mt-0 sm:pl-72 transition-opacity duration-[250ms]" ref={textComponent}>
					<h3 className="px-4 py-1 rounded-full border-dark dark:border-light border-2 text-2xl text-dark dark:text-light transition-all duration-500 font-semibold my-4">
						{skillName}
					</h3>
					<p className="text-md text-dark dark:text-light transition-all duration-500 text-transition">
						{
							skillDescription.split("\n").map((item, index) => (
								<span key={index} className="">
									{index === 0 ? <></> : <br />}
									{item}
								</span>
							))
						}
					</p>

				</div>
			</div>
		</section>
	)
}