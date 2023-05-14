import React from "react";
import { Text } from "./Text";
import { Loader } from "./Loader";

interface IProps {
    children?: React.ReactNode;
    isOpen: boolean;
    isLoading?: boolean;
}

export const Modal: React.FC<IProps> = ({ children, isOpen, isLoading }) => {
    return(
        <div className={`modal ${isOpen && 'show'}`}>
            {isLoading ? <Loader /> : (
                <div className="modal-wrapper">
                    <Text variant="h3">
                        Ваш отзыв сохранен
                    </Text>
                </div>
            )}
        </div>
    )
}