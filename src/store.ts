import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice';
import movieReducer from './features/movieSlice';

export const store = configureStore({
    reducer: {
        darkTheme: themeReducer,
        movies: movieReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

