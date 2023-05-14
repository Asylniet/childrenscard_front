import React from "react";
import { TextVariantType, TextDisplayType } from "@/models/Style";

interface IProps {
    variant?: TextVariantType;
    type?:  TextDisplayType;
    children?: React.ReactNode;
    className?: string;
}

export const Text: React.FC<IProps> = ({ variant = 'body', type = 'inline', children, className }) => {
    className = className ? className : '';
    return (
        <>
            {type === 'block' && (
                <div className={`${variant} ${className}`}>{children}</div> 
            )}
            {type === 'inline' && (
                <span className={`${variant} ${className}`}>{children}</span> 
            )}
        </>
    )
}