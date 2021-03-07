import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { GET_VIDEOS_LIST, SET_LOADING } from "./types"

function* getVideos() {
    try {
        // Delay 4 Seconds
        // Dispatch Action To Redux Store
        yield put({ type: SET_LOADING, payload: true });//show loading
        yield delay(4000);
        yield put({ type: SET_LOADING, payload: false });//hide loading
    }
    catch (error) {
        console.log(error);
    }
};

// Watcher
export default function* watcher() {
    // Take Last Action Only
    yield takeLatest(GET_VIDEOS_LIST, getVideos);
};