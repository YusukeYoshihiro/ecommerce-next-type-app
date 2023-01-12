
import { FC, HTMLAttributes } from 'react'

interface CompProps {
    children: React.ReactNode | React.ReactNode[];
    element?: React.ComponentType<HTMLAttributes<HTMLElement>>
};


const Container: FC<CompProps> = ({ children, element: Component = "div" }) => {
    return (
        <Component className="px-6 mx-auto max-w-8xl">
            {children}
        </Component>
    )
}

export default Container