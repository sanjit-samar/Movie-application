import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieList : [],
    movie: {},
}

const moviesSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {
        getMoviesFetch(state){           
        },
        getMovies(name){
            return name;
        },
        //setMovies
        getMoviesSuccess: (state, {payload}) =>{
            state.movieList = payload;          
        },
        getMoviesFailure(state){
           console.log('MovieListFailure');
        }
    }
});

export const {getMovies,getMovieListFetch,getMovieListSuccess,getMovieListFailure} = moviesSlice.actions;
export default moviesSlice.reducer;