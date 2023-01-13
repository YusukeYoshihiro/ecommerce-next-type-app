import { FC } from 'react';
import style from "./ProductSlider.module.css"

interface CompProps {
    children: React.ReactNode
}

const ProductSlider: FC<CompProps> = ({ children }) => {
    return (
        <div className={style.root}>
            <div className="h-full transition-opacity">
                {children}
            </div>
        </div>
    )
}

export default ProductSlider