import React from "react";
import { ButtonVaraintType } from "@/models/Style";

interface IProps {
    href?: string;
    target?: string;
    variant?: ButtonVaraintType;
    className?: string;
    children: React.ReactNode; 
}

export const Button: React.FC<IProps> = ({ href, target, variant = 'main', className, children }) => {
    className = className ? className : '';
    return (
        <button className={`${variant} ${className}`}>
            {href ? (
                <a href={href} target={target}>
                    {children}
                </a>
            ) : children}
        </button>
    )
}