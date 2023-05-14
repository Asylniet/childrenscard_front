import React from "react";
import { fetchComments } from "@/store/user/thunk";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useGetComments = () => {
    const teacherId = useAppSelector((state) => state.user.teacherID);
    const comments = useAppSelector((state) => state.user.comments);
    const commentsStatus = useAppSelector((state) => state.user.commentsStatus);
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        teacherId && dispatch(fetchComments(teacherId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { comments, commentsStatus }
}