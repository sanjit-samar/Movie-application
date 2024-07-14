import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { rootReducers } from './rootReducers';
import { sagas } from './rootSaga';

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {rootReducers},
    applyMiddleware: ()=> [saga]
});

// saga.run(sagas)

export default store;