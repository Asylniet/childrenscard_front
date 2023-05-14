import { IComment } from '@/models/Comment';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '@/services/api/user';
import { IResult } from '@/models/Result';


export const postRating = createAsyncThunk<IResult, IComment>(
  'user/postRating',
  async (comment) => {
    const response = await userAPI.rateTeacher(comment);
    return response;
  }
);