import React, { MouseEventHandler } from "react";
import { StarIcon } from "../svg/StarIcon";
import { useAppDispatch } from "@/hooks/useRedux";
import { ratingActions } from "@/store/rating/slice";

interface IProps {
    filled: boolean;
    index: number;
}

export const RateStar: React.FC<IProps> = ({ filled, index }) => {
    const dispath = useAppDispatch();

    const onCLickHandler = (index: number) => {
        dispath(ratingActions.setRating(index));
    }
    
    return (
        <div onClick={() => onCLickHandler(index)}>
            <StarIcon filled={filled} />
        </div>
    )
}