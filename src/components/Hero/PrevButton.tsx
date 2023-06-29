import React from "react";
import { ArrowRightIcon } from "../svg/ArrowRightIcon";
import { useSwiper } from "swiper/react";

interface IProps {
    isBeginning: boolean;
}

export const PrevButton: React.FC<IProps> = ({ isBeginning }) => {
    const swiper = useSwiper();
    return (
        <div 
            className={`${isBeginning ? 'blocked ' : ''}swiper-button-prev`} 
            onClick={() => swiper.slidePrev()}
        >
            <ArrowRightIcon />
        </div>
    )
}