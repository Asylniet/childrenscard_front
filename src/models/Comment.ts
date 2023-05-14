import { IResult } from "./Result";

export interface IComment {
    id?: number;
    teacher_id: number;
    student_id: number;
    date?: string;
    anonym?: boolean;
    comment?: string;
    rating: number;
}

export interface ICommentResult extends IResult {
    result: IComment[];
}