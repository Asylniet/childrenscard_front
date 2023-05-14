import React from "react";
import { StarIcon } from "../svg/StarIcon";

interface IProps {
    rating: number;
}

export const Rating: React.FC<IProps> = ({ rating }) => {
    const iteration = [...Array(5)]
    return (
        <div className="stars">
            {iteration.map((_, index) => (
                <StarIcon filled={rating - index > 0} key={index} />
            ))}
        </div>
    )
}