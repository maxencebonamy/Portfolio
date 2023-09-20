import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
