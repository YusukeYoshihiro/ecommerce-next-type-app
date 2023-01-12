import { FC } from 'react'
import style from './Marquee.module.css'
import MarqueeFast from "react-fast-marquee";
import cn from 'classnames';

interface CompProps {
    children: React.ReactNode[]
    variant?: "primary" | "secondary"
}

const Marquee: FC<CompProps> = ({ children, variant = "primary" }) => {

    const rooClassName = cn(
        style.root,
        {
            [style.secondary]: variant === "secondary"
        }
    )

    return (
        <div className={rooClassName}>
            <MarqueeFast>
                <div className={style.container}>
                    {children}
                </div>
            </MarqueeFast>
        </div>
    )
}

export default Marquee