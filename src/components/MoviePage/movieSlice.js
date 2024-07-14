import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieList : [],
    isMovieLoading: false
}

const moviePageSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {
        getMovieListFetch(state){
            state.isMovieLoading = true;
        },
        getMovieListSuccess(state, {payload}){
            state.movieList = payload;
        },
        getMovieListFailure(){
           console.log('MovieListFailure')
        }
    }
});

export const {getMovieListFetch,getMovieListSuccess,getMovieListFailure} = moviePageSlice.actions;
export default moviePageSlice.reducer;