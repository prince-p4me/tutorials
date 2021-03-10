import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { GET_VIDEOS_LIST, SET_LOADING, VIDEOS_LIST } from "./types"
import list from '../assets/json/list';

function* getVideos({ type, payload }) {
    try {
        // Delay 4 Seconds
        // Dispatch Action To Redux Store
        yield put({ type: SET_LOADING, payload: true });//show loading

        // filtering list
        var modifyList = list.filter((el) => {
            console.log(el.name + '===' + payload);
            console.log('22=' + el.name.indexOf(payload));
            return el.name.indexOf(payload) >= 0;
        });
        console.log({ modifyList: modifyList });

        yield delay(4000);
        yield put({ type: VIDEOS_LIST, payload: modifyList }); //show loading
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