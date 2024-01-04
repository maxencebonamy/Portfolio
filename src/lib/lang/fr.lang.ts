/* eslint-disable camelcase */
/* eslint-disable max-len */
import type { LangData } from "./lang.type"

export const FR: LangData = {
	id: "fr",
	navbar: {
		about: "À propos",
		projects: "Projets",
		skills: "Compétences",
		contact: "Contact"
	},
	home: [
		"Je suis", "Ingénieur", "Software"
	],
	about: {
		title: "Qui suis-je ?",
		content: [
			"Je m'appelle Maxence Bonamy, j'ai 20 ans et je suis passionné de programmation depuis l'âge de 11 ans.",
			"J'étudie actuellement à l'ESEO à Angers, une école d'ingénieur spécialisée en électronique et en informatique.",
			"J'ai décidé de me spécialiser en développement logiciel et web."
		]
	},
	projects: {
		title: "My projects",
		button: "More projets",
		see: "See",
		content: {
			sand_box: {
				title: "Sand Box",
				description: "This project is a physics simulation software program in which you can place various elements, such as water, sand, fire, etc., in the same environment. These elements then evolve together according to the laws of physics."
			},
			asynconf: {
				title: "Asynconf Tournament",
				description: "At the annual Asynconf conference on programming, I created this website that allowed me to clinch the first place in the tournament."
			},
			aled: {
				title: "School Help Website",
				description: "As a member of SEIO, my school's Junior Enterprise, I had the opportunity to carry out several projects for companies. This one in particular involved adding an algorithm to the website following a form to help students in difficulty."
			},
			minecraft_survival: {
				title: "Minecraft Survival",
				description: "I'm passionate about video games, and love creating my own. This one is my very first complete game, heavily inspired by a famous game. It's clearly not perfect, but it means a lot to me."
			}
		}
	},
	skills: {
		title: "My skills",
		content: {
			cpp: "A programming language I've been learning for over 3 years.\nIt's notoriously complex. In fact, it has enabled me to understand an enormous number of concepts and to know what's going on behind the lines of code.\nI use it above all for its famous speed of execution, which makes it my preferred choice for my physics simulation projects.\nI mainly use it to the SFML library for display management in particular.",
			php: "A programming language used in web development, particularly on the back-end.\nIt's a server-side language that I use with SQL to perform database queries.\nWhenever possible, I prefer to use the Prisma ORM for SQL queries.",
			typescript: "A programming language based on JavaScript, widely used in web development, particularly on the front-end.\nTypeScript improves code quality, developer productivity and reduces potential errors compared to JavaScript, which explains why I've been using this language for almost a year now.\nFor example, I used it to create this portfolio.",
			tailwind: "CSS is a descriptive language used to style web pages, which are themselves described by HTML files.\nTailwind is a CSS library that allows you to write much less CSS, thus considerably improving productivity.\nI used it, for example, to create this portfolio.",
			react: "A JavaScript library widely used in web development.\nFor my part, I now use it with the TypeScript language, and from two different frameworks depending on the use case: ViteJS or NextJS.\nI'm also currently learning to use ReactNative, a React-based framework for developing cross-platform mobile applications.",
			git: "A version management system that I now use for every project.\nIn fact, it's used extensively by developers and has become indispensable in the field of programming.\nI use it with the GitHub project host, where you can find the source code of all my projects, like this portfolio.",
			c: "A very old and very important programming language.\nIt can be used in many fields, but I personally use it in hardware, to program embedded systems, for example with an STM32 board.\nHowever, in my opinion, there are now other technologies much more suited to other fields, so I don't use this language for other types of project.",
			java: "A programming language based on the object-oriented paradigm, which I like very much.\nIt is used in many fields and is best known for its portability. Indeed, it runs on a virtual machine, which can be installed on any operating system.\nI started using it to program plugins for the Minecraft game, and I'm now using it to program my own games using the LibGDX framework.",
			python: "A programming language widely known for its simplicity and large community.\nIt's an interpreted language, meaning that, unlike a compiled language, it's executed directly without going through the compilation stage, which unfortunately has an impact on execution speed.\nFor my part, it was the first language I learned to use, and I still use it today, with the Tkinter, Pygame, Matplotlib, Numpy, and other libraries."
		}
	},
	contact: {
		title: "Contact me",
		content: [
			"Would you like to learn more about me?",
			"Do you have a project to carry out?",
			"Don't hesitate to contact me by e-mail or on other networks!"
		]
	},
	footer: {
		content: "Fait par Maxence Bonamy avec Next, React, TypeScript & Tailwind."
	}
}