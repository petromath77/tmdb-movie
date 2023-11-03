import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice';
import movieReducer from './features/movieSlice';
import detailReducer from './features/detailSlice';

export const store = configureStore({
    reducer: {
        darkTheme: themeReducer,
        movies: movieReducer,
        detail: detailReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

