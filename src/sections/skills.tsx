import Separator from "../components/separator"
import langTexts from "../assets/lang.json"
import Arrow from "../components/svg/arrow"
import { Skill, skills, skillsImages } from "../assets/skills/skills"
import { useState } from "react"
import { cn } from "../utils"

interface SkillsProps {
    lang: "fr" | "en"
}

const Skills = ({ lang }: SkillsProps) => {
    const [skill, setSkill] = useState<Skill>("react")

    const [orderedSkills, setOrderedSkills] = useState([...skills])

    const shiftOrderedSkills = () => {
        let first = orderedSkills.shift() as Skill
        orderedSkills.push(first)
        setOrderedSkills(orderedSkills)
    }

    const handleClick = (item: Skill) => {
        setSkill(item)
        while (orderedSkills[4] !== item) {
            shiftOrderedSkills()
        }
    }

    return (
        <section
            id="skills"
            className="w-10/12 lg:w-9/12 bg-light dark:bg-dark transition-colors duration-500 pt-32"
        >
            <div className="flex flex-row items-center justify-start">
                <h2 className="text-transition uppercase font-semibold text-dark dark:text-light transition-all duration-500 text-4xl sm:text-5xl lg:text-6xl max-w-5/6 text-left">
                    {langTexts[lang].skills.title}
                </h2>
                <Arrow
                    direction="right"
                    className="text-transition ml-2 lg:ml-6 h-7 sm:h-9 lg:h-11 fill-dark dark:fill-light transition-all duration-500"
                />
            </div>
            <Separator
                orientation="horizontal"
                length="100%"
                className="my-4"
            />
            <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-28">
                    {orderedSkills.map((item) => (
                        <div
                            className={cn(
                                item === skill ? "w-28 h-28" : "w-16 h-16",
                                "cursor-pointer flex items-center justify-center transition-all duration-500"
                            )}
                            onClick={() => handleClick(item)}
                            key={item}
                        >
                            <img
                                src={skillsImages[item]}
                                alt={langTexts[lang].skills.names[item]}
                                className="transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
                <h3 className="px-4 py-1 rounded-full border-dark dark:border-light border-2 text-2xl text-dark dark:text-light transition-all duration-500 font-semibold my-4">
                    {langTexts[lang].skills.names[skill]}
                </h3>
                <p className="text-md text-dark dark:text-light transition-all duration-500 text-transition">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    possimus in eveniet voluptas esse fugiat. Nam saepe, esse
                    laborum accusamus reprehenderit corporis obcaecati quos in
                    labore laboriosam, nulla praesentium facilis. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Beatae velit
                    ducimus repudiandae amet labore quisquam rerum dignissimos
                    odio dicta consectetur totam, qui numquam natus repellendus
                    recusandae minima ab explicabo ullam.
                </p>
            </div>
        </section>
    )
}

export default Skills
