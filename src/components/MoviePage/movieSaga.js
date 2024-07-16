import { takeLatest, call, put, fork } from "redux-saga/effects";
import { getMoviesSuccess, getMovies } from "./movieSlice";
import { moviesApi } from "../../services/moviesApi";


function* onLoadMovies({payload}){
    try{
        const movieName = payload;
        const response = yield call(()=>moviesApi(movieName));
        if(response.status === 200){
            yield put(getMoviesSuccess(response.data))
        }
    }catch(error){
        console.log(error)
    }
}

    function* onLoadMoviesWatcher(){
    yield takeLatest(getMovies.type, onLoadMovies)
}

export const movieSaga = [fork(onLoadMoviesWatcher)];