import { VIDEOS_LIST, SET_LOADING } from './types';
import initlist from "../assets/json/list";

const initialState = {
    list: initlist
};

export const getVideosList = (state = initialState, action) => {
    switch (action.type) {
        case VIDEOS_LIST:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
}

export const isLoading = (state = false, action) => {
    switch (action.type) {
        case SET_LOADING:
            return action.payload;
        default:
            return state;
    }
}
export default getVideosList;