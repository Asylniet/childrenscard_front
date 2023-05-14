import React from "react";
import Image from "next/image";
import { Text } from "../common/Text";

export const EmptyComment: React.FC = () => {
    return (
        <div className="empty" style={{ marginBottom: '5rem' }}>
            <Image src='/empty/comment.png' alt="Нет отзывов" width={200} height={200} />
            <Text className="tac" type="block" variant="h2">
              У преподавателя нет отзывов
            </Text>
        </div>
    )
}