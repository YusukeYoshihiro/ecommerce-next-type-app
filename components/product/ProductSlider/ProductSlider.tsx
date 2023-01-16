import React, { FC, Children, isValidElement, ReactNode, useState } from 'react';
import style from "./ProductSlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import cn from "classnames";

interface CompProps {
    children: React.ReactNode | React.ReactNode[];
}

const ProductSlider: FC<CompProps> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        loop: true,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide);
        },
    });
    console.log(currentSlide);

    return (
        <div className={style.root}>
            <div
                ref={sliderRef as React.RefObject<HTMLDivElement>}
                className="keen-slider h-full transition-opacity">
                <button
                    onClick={slider?.prev}
                    className={cn(style.leftControl, style.control)}
                />
                <button
                    onClick={slider?.next}
                    className={cn(style.rightControl, style.control)}
                />
                {Children.map(children, child => {

                    if (isValidElement(child)) {
                        // return {
                        //     ...child,
                        //     props: {
                        //         ...child.props,
                        //         className: `${child.props.className ? `${child.props.className}` : ""} keen-slider__slide`
                        //     }
                        // }

                        // let props = { className: "keen-slider__slide" };
                        const props = { className: `${child.props.className ? `${child.props.className}` : ""} keen-slider__slide` };
                        return React.cloneElement(child, props)

                        // return React.cloneElement(child, {
                        //     className: `${child.props.className ? `${child.props.className}` : ""} keen-slider__slide`
                        // })
                    }

                    return child
                })}
            </div>
        </div>
    )
}

export default ProductSlider