import React, { FC, ReactNode } from 'react';
import style from "./Swatch.module.css";
import { Check } from '@components/icons';
import cn from "classnames";
import { isDark } from '@lib/color';


interface CompProps {
    children: ReactNode | ReactNode[]
    color?: string
    label?: string
    variant?: "size" | "color" | string
    active?: boolean
    onClick: () => void
    size?: "sm" | "md" | "lg"
}

const Swatch: FC<CompProps> = ({
    children,
    color,
    label,
    variant,
    active,
    size = "md",
    ...rest
}) => {

    label = label?.toLocaleLowerCase();
    variant = variant?.toLocaleLowerCase();

    const rootClassName = cn(
        style.root,
        {
            [style.active]: active,
            [style.color]: color,
            [style.size]: variant === "size",
            [style.dark]: color && isDark(color),
            [style.sm]: size === "sm"
        }
    )

    return (
        <button
            className={rootClassName}
            style={color ? { backgroundColor: color } : {}}
            {...rest}
        >
            {variant === "color" && active &&
                <span>
                    <Check />
                </span>
            }
            {variant === "size" ? label : null}
        </button>
    )
}

export default Swatch