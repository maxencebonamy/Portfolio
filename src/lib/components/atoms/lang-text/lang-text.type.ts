import type { LangData } from "@/lib/lang"
import type { ComponentType, HTMLAttributes } from "react"

export type LangTextProps = {
    content: (lang: LangData) => string
    componentType: string | ComponentType<HTMLAttributes<HTMLElement>>
    className?: string
}

export type LangParagraphProps = {
    content: (lang: LangData) => string[]
    className?: string
}