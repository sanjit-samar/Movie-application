import { takeLatest, call, put, fork } from "redux-saga/effects";
import { getMovieListSuccess, getMovies } from "./movieSlice";
import { moviesApi } from "../../services/moviesApi";


function* onLoadMovies({payload}){
    try{
        const moviesName = payload;
        const response = yield call(moviesApi, moviesName);
        if(response.status === 200){
            yield put(getMovieListSuccess(response.data))
        }
    }catch(error){
        console.log(error)
    }
}

    function* onLoadMoviesWatcher(){
    yield takeLatest(getMovies.type, onLoadMovies)
}

export const movieSaga = [fork(onLoadMoviesWatcher)];