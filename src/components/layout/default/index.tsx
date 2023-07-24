import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
