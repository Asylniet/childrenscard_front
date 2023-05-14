import React, { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { RateStars } from "./RateStars";
import { SendIcon } from "../svg/SendIcon";
import { ratingActions } from "@/store/rating/slice";
import { Text } from "../common/Text";
import { postRating } from "@/store/rating/thunk";
import { Modal } from "../common/Modal";
import { useRouter } from "next/router";

export const RateForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const rating = useAppSelector((state) => state.rating.rating);
    const comment = useAppSelector((state) => state.rating.comment);
    const teacherId = useAppSelector((state) => state.user.teacherID);
    const [error, setError] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);

    const { push } = useRouter();

    const postRatingStatus = useAppSelector((state) => state.rating.postRatingStatus);

    React.useEffect(() => {
        checkRating();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating, comment]);

    React.useEffect(() => {
        if(postRatingStatus === 'SUCCEEDED') {
            setTimeout(() => {
                push('/');
            }, 1000);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postRatingStatus])

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(ratingActions.setComment(event.target.value));
    }
    
    async function onSubmitHandler(e: FormEvent) {
        e.preventDefault();
        setIsOpen(true);
        dispatch(postRating({
            student_id: 1,
            teacher_id: teacherId,
            rating: rating,
            comment: comment,
            anonym: true,
        }));
    }

    const checkRating = () => {
        if(rating < 3 && !comment) setError('Заполните это поле');
        else setError('');
    }
    return (
        <form className="container commentForm" onSubmit={onSubmitHandler}>
            <Modal isOpen={isOpen} isLoading={postRatingStatus === 'PENDING'} /> 
            <RateStars />
            <div className="formContent">
                <div className="relative fz1.5">
                    <label htmlFor="comment">Оставьте отзыв</label>
                    <input type="text" placeholder="Комментарий" name="comment" onChange={onChangeHandler} />
                    <Text variant="subtitle" className="clr-red pos-a">{error}</Text>
                </div>
                <button disabled={rating < 3 && !comment} className="sendButton">
                    <SendIcon />
                </button>
            </div>
        </form>
    )
}