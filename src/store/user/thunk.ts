import { ICommentResult } from '@/models/Comment';
import { IUserResult } from '@/models/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '@/services/api/user';

export const getUser = createAsyncThunk<IUserResult, number>(
  'user/getUser',
  async (id) => {
    const response = await userAPI.get(id);
    return response;
  }
);

export const fetchComments = createAsyncThunk<ICommentResult, number>(
  'user/fetchComments',
  async (id: number) => {
    const response = await userAPI.getComments(id);
    return response;
  }
);