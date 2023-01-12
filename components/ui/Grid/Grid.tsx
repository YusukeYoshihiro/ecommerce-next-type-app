import { FC } from "react";
import style from "./Grid.module.css"
import cn from "classnames";

interface CompProps {
    children: React.ReactNode[];
    layout?: "A" | "B"
};

const Grid: FC<CompProps> = ({
    children,
    layout = "A"
}) => {

    const rootClassName = cn(
        style.root,
        {
            [style.layoutA]: layout === 'A',
            [style.layoutB]: layout === 'B',
        }
    )

    return (
        <div className={rootClassName}>
            {children}
        </div>
    )
}

export default Grid