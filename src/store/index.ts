import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/slice';
import { ratingReducer } from './rating/slice';

// config the store 
function makeStore() {
    return configureStore({
       reducer: {
          user: userReducer,
          rating: ratingReducer,
       }
    });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;