import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieState } from '../types/data';

export const getUpcoming = createAsyncThunk(
    'movies/getUpcoming',
    async (data, thunkApi) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_KEY}`);

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

const initialState: MovieState = {
    loading:  false,
    error: null,
    data: null
}

export const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUpcoming.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUpcoming.fulfilled, (state, action: PayloadAction<{ results: any[] }>) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getUpcoming.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export default upcomingSlice.reducer;