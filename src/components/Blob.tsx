import { useEffect, useState } from "react"
import { cn } from "../utils"

interface CircleBlobProps {
    size: number
    className?: string
}

interface BlobProps {
    size: number
    className?: string
}


const CircleBlob = ({size, className}: CircleBlobProps) => {
    const [style, setStyle] = useState({})

    useEffect(() => {
        setStyle({
            ...style,
            width: `${size}rem`,
            height: `${size}rem`,
            boxShadow: `0 0 ${size / 4}rem ${size / 4}rem #FF6A69`
        })
    }, [size])

    return (
        <div style={style} className={`${className ?? ""} absolute rounded-full bg-red`}></div>
    )
}

const Blob = ({size, className}: BlobProps) => {
    const [actualSize, setActualSize] = useState(size)

    useEffect(() => {
        const interval = setInterval(() => {
            setActualSize(size * 0.9999)
            setTimeout(() => {
                setActualSize(size)
            }, 10)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className={`${className ?? ""} blob`}>
            <CircleBlob size={actualSize} className="blob-circle-1 -translate-x-1/2 -translate-y-1/2" />
            <CircleBlob size={actualSize} className="blob-circle-2 -translate-x-1/2 -translate-y-1/2" />
            <CircleBlob size={actualSize} className="blob-circle-3 -translate-x-1/2 -translate-y-1/2" />
            <CircleBlob size={actualSize} className="blob-circle-4 -translate-x-1/2 -translate-y-1/2" />
        </div>
    )
}


export default Blob