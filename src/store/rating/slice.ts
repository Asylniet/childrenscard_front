import { Status } from '@/models/Status';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postRating } from './thunk';

export interface IRate {
    rating: number;
    comment: string;
    isAnonym: boolean;
    postRatingStatus: Status;
}
  
export const initialState: IRate = {
    rating: 1,
    comment: '',
    isAnonym: false,
    postRatingStatus: 'IDLE',
};

const slice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        setComment(state, action: PayloadAction<string>) {
            state.comment = action.payload;
        },
        setRating(state, action: PayloadAction<number>) {
            state.rating = action.payload;
        },
        setAnonym(state, action: PayloadAction<boolean>) {
            state.isAnonym = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(postRating.pending, (state) => {
            state.postRatingStatus = 'PENDING';
        });

        builder.addCase(postRating.rejected, (state) => {
            state.postRatingStatus = 'FAILED';
        });

        builder.addCase(postRating.fulfilled, (state) => {
            state.postRatingStatus = 'SUCCEEDED';
        });
    },
});

export const ratingReducer = slice.reducer;
export const ratingActions = slice.actions;