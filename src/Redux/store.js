import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { rootReducers } from './rootReducers';
import  rootSaga  from './rootSaga';

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {rootReducers},
    middleware: ()=> [SagaMiddleware]
});

SagaMiddleware.run(rootSaga);

export default store;