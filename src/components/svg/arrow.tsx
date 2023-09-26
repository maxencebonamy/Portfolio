interface ArrowProps {
    direction: "left" | "right"
    className?: string
}

const Arrow = ({ direction: sense, className }: ArrowProps) => {
    return sense === "left" ? (
        <svg
            className={className ?? ""}
            width="93"
            height="66"
            viewBox="0 0 93 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.0565 66L0.443481 31.762L31.8698 0.624023H92.5604L57.9085 34.9581L78.4106 66H23.0565ZM42.472 33.36L63.4 12.624H36.808L15.88 33.36L29.512 54H56.104L42.472 33.36Z"
            />
        </svg>
    ) : (
        <svg
            className={className ?? ""}
            width="94"
            height="66"
            viewBox="0 0 94 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.2782 0.624023H70.592L93.1861 34.9925L61.7459 66H0.975159L35.7259 31.7275L15.2782 0.624023ZM51.16 33.36L30.232 54H56.824L77.752 33.36L64.12 12.624H37.528L51.16 33.36Z"
            />
        </svg>
    )
}

export default Arrow
