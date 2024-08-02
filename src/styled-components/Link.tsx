import React, { ReactNode } from "react"
import { Link as ScrollLinked } from 'react-scroll'
interface Props {
    to: string,
    activeClass?:string,
    spy?: boolean,
    smooth?: boolean,
    duration?: number,
    children: ReactNode
}

const Link = ({to, activeClass,spy=true, smooth=true, duration=500, children}:Props) => {
    return (
        <React.Fragment>
            <ScrollLinked
                to={to}
                activeClass={activeClass}
                spy={spy}
                smooth={smooth}
                duration={duration}
            >{children}</ScrollLinked>
        </React.Fragment>
    )
}

export default Link
