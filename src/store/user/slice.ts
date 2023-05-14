import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICommentResult } from '@/models/Comment';
import { IUserResult } from '@/models/User';
import { Status } from '@/models/Status';
import { fetchComments, getUser } from './thunk';

interface IUserInfo {
    teacherID: 9;
    user: IUserResult | undefined;
    fetchUserStatus: Status;
    comments: ICommentResult | undefined;
    commentsStatus: Status;
}
  
const initialState: IUserInfo = {
    teacherID: 9,
    user: undefined,
    fetchUserStatus: 'IDLE',
    comments: undefined,
    commentsStatus: 'IDLE',
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetValue(state) {
            state.user = undefined;
            state.comments = undefined;
            state.commentsStatus = 'IDLE';
            state.fetchUserStatus = 'IDLE';
        },
        setComments(state, action: PayloadAction<ICommentResult>) {
            state.comments = action.payload;
        },
        setUser(state, action: PayloadAction<IUserResult>) {
            state.user = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchComments.pending, (state) => {
            state.commentsStatus = 'PENDING';
        });

        builder.addCase(fetchComments.rejected, (state) => {
            state.commentsStatus = 'FAILED';
        });

        builder.addCase(fetchComments.fulfilled, (state, action: PayloadAction<ICommentResult>) => {
            state.comments = action.payload;
            state.commentsStatus = 'SUCCEEDED';
        });

        builder.addCase(getUser.pending, (state) => {
            state.fetchUserStatus = 'PENDING';
        });

        builder.addCase(getUser.rejected, (state) => {
            state.fetchUserStatus = 'FAILED';
        });

        builder.addCase(getUser.fulfilled, (state, action: PayloadAction<IUserResult>) => {
            state.user = action.payload;
            state.fetchUserStatus = 'SUCCEEDED';
        });
    },
});

export const userReducer = slice.reducer;
export const userActions = slice.actions;