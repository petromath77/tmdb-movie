import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieDetailState } from '../types/data';

export const getDetails = createAsyncThunk(
    'movies/Details',
    async (movieId: string | undefined, thunkApi) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
            
            if(!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data;
            
        } catch (error: any) {
           return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState: MovieDetailState = {
    loading: false,
    error: null,
    data: null
}

export const detailSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getDetails.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getDetails.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default detailSlice.reducer;
