import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice';
import movieReducer from './features/movieSlice';
import detailReducer from './features/detailSlice';
import upcomingReducer from './features/upcomingSlice';
import favoriteReducer from './features/favoriteSlice';

export const store = configureStore({
    reducer: {
        darkTheme: themeReducer,
        movies: movieReducer,
        detail: detailReducer,
        upcoming: upcomingReducer,
        favorite: favoriteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

