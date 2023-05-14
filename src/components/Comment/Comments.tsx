import React from "react";
import { Comment } from "./Comment";
import { Loader } from "../common/Loader";
import { EmptyComment } from "./EmptyComment";
import { useAppSelector } from "@/hooks/useRedux";

export const Comments = () => {
    const comments = useAppSelector((state) => state.user.comments);
    const commentsStatus = useAppSelector((state) => state.user.commentsStatus);
    return (
        <div className="comments container">
          {commentsStatus === 'PENDING' && <Loader /> }
          {commentsStatus === 'SUCCEEDED' && comments && comments.result.map((comment, index) => (
            <Comment date={comment.date} rating={comment.rating} anonym={comment.anonym} comment={comment.comment} key={index} id={0} teacher_id={comment.teacher_id} student_id={comment.student_id} />
          ))}
          {comments && comments.result.length === 0 && <EmptyComment />}
        </div>
    )
}