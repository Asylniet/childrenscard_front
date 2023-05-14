import React from "react";
import { RateStar } from "./RateStar";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { Text } from "../common/Text";

export const RateStars: React.FC = () => {
    const rating = useAppSelector((state) => state.rating.rating);
    const iteration = [...Array(5)];

    const ratingWarns = new Map([
        [1, 'Обьясните причину низкого рейтинга'],
        [2, "Что-то пошло не так?"],
        [3, "Что можно было бы улучшить?"],
        [4, "Есть ли рекомендации преподавателю?"],
        [5, 'Отлично!'],
    ]);
    return (
        <div className="rateStars">
            <div className="flex">
                {iteration.map((_, index) => (
                    <RateStar key={index} filled={rating - index > 0} index={index + 1} />
                ))}
            </div>
            <Text type="block" className="tac">
                {ratingWarns.get(rating)}
            </Text>
        </div>
    )
}