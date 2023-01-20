import React, {
    ButtonHTMLAttributes,
    Component,
    ComponentType,
    FC,
    HTMLAttributes
} from 'react'
import style from "./Button.module.css"
import cn from "classnames"
import { LoadingDots } from '@components/ui';

interface CompProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | React.ReactNode[];
    isLoading?: boolean
    Component?: string | ComponentType<HTMLAttributes<HTMLElement>>
    href?: string
}

const Button: FC<CompProps> = ({
    children,
    className,
    isLoading = false,
    Component = "button",
    ...rest
}) => {

    const rootClassName = cn(
        style.root,
        className,
        {
            [style.loading]: isLoading
        }
    )
    return (
        <Component
            className={rootClassName}
            type='button'
            {...rest}
        >
            {children}
            {isLoading &&
                <i className='pl-2 m-0 flex'>
                    <LoadingDots />
                </i>
            }
        </Component>
    )
}

export default Button