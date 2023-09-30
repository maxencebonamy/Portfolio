import Separator from "../components/separator"
import langTexts from "../assets/lang.json"
import Arrow from "../components/svg/arrow"
import { skills, skillsImages } from "../assets/skills/skills"
import { useEffect, useRef, useState } from "react"
import { cn } from "../utils"
import Turn from "../components/svg/turn"

interface SkillsProps {
    lang: "fr" | "en"
}

const Skills = ({ lang }: SkillsProps) => {
    const [skill, setSkill] = useState(0)
    const nbSkills = skills.length
    let canTurn = true

    const textComponent = useRef<HTMLDivElement>(null)
    const [skillName, setSkillName] = useState(langTexts[lang].skills.names[skills[skill].name])
    const [skillDescription, setSkillDescription] = useState(langTexts[lang].skills.descriptions[skills[skill].name])

    const setSkillWithTransition = (index: number) => {
        setSkill(index)
        canTurn = false
        if (textComponent.current) textComponent.current.style.opacity = "0"
    }

    const onSkillClick = (index: number) => {
        if (canTurn) {
            setSkillWithTransition(index)
        }
    }

    const nextSkill = () => {
        if (canTurn) {
            if (skill === nbSkills - 1) {
                setSkillWithTransition(0)
            }
            else {
                setSkillWithTransition(skill + 1)
            }
        }
    }

    let getSkillPosition = (index: number) => ({
        top: `${
            (1 - Math.sin(((index - skill) / nbSkills) * 2 * Math.PI)) * 9.5 +
            0.75
        }rem`,
        left: `${
            (1 + Math.cos(((index - skill) / nbSkills) * 2 * Math.PI)) * 9.5 +
            0.75
        }rem`,
    })

    useEffect(() => {
        getSkillPosition = (index: number) => ({
            top: `${
                (1 - Math.sin(((index - skill) / nbSkills) * 2 * Math.PI)) *
                    9.5 +
                0.75
            }rem`,
            left: `${
                (1 + Math.cos(((index - skill) / nbSkills) * 2 * Math.PI)) *
                    9.5 +
                0.75
            }rem`,
        })

        const firstTimeout = setTimeout(() => {
            setSkillName(langTexts[lang].skills.names[skills[skill].name])
            setSkillDescription(langTexts[lang].skills.descriptions[skills[skill].name])
            if (textComponent.current) textComponent.current.style.opacity = "1"
        }, 250)

        const secondTimeout = setTimeout(() => {
            canTurn = true
        }, 500)

        return () => {
            clearTimeout(firstTimeout)
            clearTimeout(secondTimeout)
        }
    }, [skill])

    return (
        <section
            id="skills"
            className="w-10/12 lg:w-9/12 bg-light dark:bg-dark transition-colors duration-500 pt-32"
        >
            <div className="flex flex-row items-end justify-start">
                <h2 className="text-transition uppercase font-semibold text-dark dark:text-light transition-all duration-500 text-4xl sm:text-5xl lg:text-6xl text-left" lang={lang}>
                    {langTexts[lang].skills.title}
                </h2>
                <Arrow
                    direction="right"
                    className="text-transition mb-[7px] lg:ml-6 h-7 sm:h-9 lg:h-11 fill-dark dark:fill-light transition-all duration-500"
                />
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
                    <div className={cn("absolute h-56 w-56 rounded-full right-10 top-1/2 -translate-y-1/2 translate-x-1/2 transition-all duration-500 opacity-0")} style={{background: `radial-gradient(${skills[skill].color} 0%, transparent 70%`}} />
                    <Turn className="absolute bottom-0 right-0 text-red transition-all duration-500 h-16 w-16 call-to-action cursor-pointer hover:text-dark hover:dark:text-light" onClick={nextSkill} />
                    {skills.map((item, index) => (
                        <div
                            key={index}
                            className={cn(index === skill ? "h-28 w-28 -translate-x-8 -translate-y-8" : "h-14 w-14", "absolute transition-all duration-500 cursor-pointer")}
                            style={getSkillPosition(index)}
                            onClick={() => onSkillClick(index)}
                        >
                            <img
                                src={skillsImages[item.name]}
                                alt={langTexts[lang].skills.names[item.name]}
                                className={cn(index === skill ? "h-28 w-28" : "h-14 w-14", "transition-all duration-500")}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-start mt-96 sm:mt-0 sm:ml-72 transition-opacity duration-[250ms]" ref={textComponent}>
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

export default Skills
