import React from "react";
import Image from "next/image";
import { Text } from "../common/Text";
import { Rating } from "./Rating";

import { IComment } from "@/models/Comment";

export const Comment: React.FC<IComment> = ({ date, anonym, comment, rating }) => {
    return (
        <div className="comment">
            <Image src={!anonym ? '/profile.jpg' : '/anonym.jpg'} alt={!anonym ? `${rating}` : 'Anonym'} width={70} height={70}  />
            <div className="comment-content">
                <div>
                    <Text variant="h2">{anonym ? 'Аноним' : ''}</Text>
                    <Text>{date?.slice(0, 10)}</Text>
                </div>
                <Rating rating={rating} />
                <Text type="block">{comment}</Text>
            </div>
        </div>
    )
}