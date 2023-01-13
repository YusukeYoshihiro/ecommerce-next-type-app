import React, { ButtonHTMLAttributes, FC } from 'react'
import style from "./Button.module.css"
import cn from "classnames"

interface CompProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | React.ReactNode[];
}

const Button: FC<CompProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <button
            className={cn(style.root, className)}
            type='button'
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button