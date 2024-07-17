import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
};

const moviesSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    getMovies(name) {
      return name;
    },
    //setMovies
    getMoviesSuccess: (state, { payload }) => {
      state.movieList = payload;
    },
    getMoviesFailure(state) {
      console.log("MovieListFailure");
    },
  },
});

export const {
  getMovies,
  getMovieListFetch,
  getMoviesSuccess,
  getMovieListFailure,
} = moviesSlice.actions;
export default moviesSlice.reducer;
