import { FC } from "react";
import style from './Layout.module.css';
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";

type CompProps = {
    children: React.ReactNode;
};

const Layout: FC<CompProps> = ({ children }) => {
    const { isSidebarOpen, closeSidebar } = useUI();

    return (
        <>
            <div className={style.root}>
                <Navbar />
                <Sidebar
                    onClose={closeSidebar}
                    isOpen={isSidebarOpen}>
                    <CartSidebar />
                </Sidebar>
                <main className="fit">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout