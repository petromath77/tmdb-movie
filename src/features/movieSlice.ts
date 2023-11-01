import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieState } from '../types/data';

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async (data, thunkApi) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
            
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
    loading: false,
    error: null,
    data: null,
    movieDetails: false
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMovies.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMovies.fulfilled, (state, action: PayloadAction<{ results: any[] }>) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getMovies.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const getSelectedMovie = (state: any) => state.movies.movieDetails;

export default movieSlice.reducer;