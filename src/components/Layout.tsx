import React, { ReactNode } from "react";
import { Header } from "./Header/Header";

interface IProps {
    children: ReactNode;
}
 
export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}