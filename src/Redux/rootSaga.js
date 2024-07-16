import { all } from "redux-saga/effects";
import { movieSaga } from "../components/MoviePage/movieSaga";

export default function* rootSaga(){
    yield all([movieSaga]);
}