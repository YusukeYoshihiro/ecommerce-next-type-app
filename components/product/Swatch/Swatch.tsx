import React, { FC } from 'react';
import style from "./Swatch.module.css";
import { Check } from '@components/icons';
import cn from "classnames";
import { isDark } from '@lib/color';


interface CompProps {
    color?: string
    label?: string
    variant: "size" | "color" | string
    active: boolean
    onClick: () => void
}

const Swatch: FC<CompProps> = ({
    color,
    label,
    variant,
    active,
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