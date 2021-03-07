import { createStore, combineReducers, applyMiddleware } from 'redux';
import { getVideosList, isLoading } from './reducer';
import getListSaga from './saga';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

// creating reducers
const rootReducer = combineReducers({
  videos: getVideosList,
  isLoading
});

//creating, applying sagas

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([
    fork(getListSaga),
  ]);
}

//creating store
const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
  ),
);

//running saga middleware
sagaMiddleware.run(rootSaga);

export default store;
