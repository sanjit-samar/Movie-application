import { combineReducers } from "redux";
import movieReducer from "../components/MoviePage/movieSlice";

export const rootReducers = combineReducers({
    movies: movieReducer
});