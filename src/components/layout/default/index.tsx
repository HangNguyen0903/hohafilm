import React, { ReactNode } from 'react';
import Header from "./Header"
import SideBar from "./SideBar"

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <SideBar />
            <div className="container">
                {children}
            </div>
        </div>
    )

}
export default DefaultLayout