import { IResult } from "./Result";

export interface IUser {
    id: number;
    username: string;
    email: string;
    first_name: string;
    lastn_name: string;
    role: 'admin' | 'teacher' | 'student';
    profile_pic: string;
    bio: string;
    user_qr?: string;
}

export interface IUserResult extends IResult {
    result: IUser;
}