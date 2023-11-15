import type { Lang } from "@/lib/lang"

export type LangState = {
    lang: Lang
    setLang: (value: Lang) => void
    toggleLang: () => void
}