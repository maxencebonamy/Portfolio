interface MouseProps {
    size: number
    className?: string
}

const Mouse = ({size, className}: MouseProps) => {
    const style = {
        width: `${size*2/3}rem`,
        height: `${size}rem`
    }

    const scrollStyle = {
        height: `${size*2/9}rem`
    }

    return (
        <div style={style} className={`${className ?? ""} border-[0.15rem] border-dark dark:border-light rounded-full flex flex-col items-center justify-start transition-colors duration-500`}>
            <span style={scrollStyle} className={`w-[0.15rem] mouse-scroll rounded-full mt-3 bg-dark dark:bg-light transition-colors duration-500`} />
        </div>
    )
}

export default Mouse