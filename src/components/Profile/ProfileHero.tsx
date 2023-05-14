import React from "react";
import Image from "next/image";
import { Text } from "../common/Text";
import QrCode from "../Qr";
import { useGetComments } from "@/hooks/useGetComments";

import profilePhoto from '../../../public/profile.jpeg';
import { StarIcon } from "../svg/StarIcon";
import { CrownIcon } from "../svg/CrownIcon";
import { IComment } from "@/models/Comment";

export const ProfileHero: React.FC<{ qr?: boolean }> = ({ qr = true }) => {
    const { comments } = useGetComments();
    const [total, setTotal] = React.useState(0);
    const [rating, setRating] = React.useState(0);
    const [amount, setAmount] = React.useState(0);
    React.useEffect(() => {
        if(comments?.isSuccess) {
            setTotal(comments.result.length);
            setRating(calculateSum(comments.result));
            setAmount(1);
        }
    }, [comments])

    function calculateSum(arr: IComment[]) {
        if(arr.length === 0) return 0;
        let sum = 0;
        arr.forEach((comment) => sum += comment.rating);
        return sum / arr.length;
    }
    return (
        <div className="container profile-hero-wrapper">
            <div className="profile-hero">
                <Image src={profilePhoto} alt="Profile" />
                <div className="profile-hero-info">
                    <div className="profile-hero-text">
                        <Text variant="h1" type="block">Alma Valley</Text>
                        <Text variant="h3" type="block">КБТУ</Text>
                        <Text variant="h3" type="block">IT хаб</Text>
                        <Text variant="h3" type="block">Презентация</Text>
                    </div>
                    <div className="profile-hero-stats">
                        <div className="profile-hero-stats-block">
                            <StarIcon />
                            <div className="column tac">
                                <Text variant="h2">{rating.toFixed(2)}</Text>
                                <Text variant="body2" className="clr-gray">{total}</Text>
                            </div>
                        </div>
                        <div className="profile-hero-stats-block">
                            {rating < 2.5 && <CrownIcon fill="#B87333" /> }
                            {rating >= 2.5 && rating < 4 && <CrownIcon fill="#C0C0C0" />}
                            {rating >= 4 && <CrownIcon fill="#FDDB2E" />}
                        </div>
                        <div className="profile-hero-stats-block">
                            <div className="column">
                                <Text variant="h2" className="tac">{amount}</Text>
                                <Text variant="body2" className="clr-gray">презентаций</Text>
                            </div>
                        </div>
                    </div>
                </div>
                {qr && (
                    <QrCode />
                )}
            </div>
        </div>
    )
}