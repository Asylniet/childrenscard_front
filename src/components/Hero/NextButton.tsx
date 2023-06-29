import React from "react";
import { ArrowRightIcon } from "../svg/ArrowRightIcon";
import { useSwiper } from "swiper/react";

interface IProps {
    isEnd: boolean;
}

export const NextButton: React.FC<IProps> = ({ isEnd }) => {
    const swiper = useSwiper();
    return (
        <div 
            className={`${isEnd ? 'blocked ' : ''}swiper-button-next`} 
            onClick={() => swiper.slideNext()}
        >
            <ArrowRightIcon />
        </div>
    )
}