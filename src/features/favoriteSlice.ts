import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = [];

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<any>) => {
            
            const index = state.find((el: any)  => el.id === action.payload.id);

            if(!index) {
                return [...state, action.payload];
            }
        },
    }
})

export const { addFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer