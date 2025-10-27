import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice.ts';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;