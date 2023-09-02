import { createSlice } from '@reduxjs/toolkit'

type ThemeState = boolean;

const themeFromLocalStorage = !!localStorage.getItem('app-theme');

const initialState: ThemeState = themeFromLocalStorage;

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if(state) {
                localStorage.removeItem('app-theme'); 
            } else {
                localStorage.setItem('app-theme', 'dark');
            }

            return (state = !state)
        }
    }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer