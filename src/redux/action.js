import { GET_VIDEOS_LIST, SET_LOADING } from './types';

export function getVideos(payload) {
    return {
        type: GET_VIDEOS_LIST,
        payload
    }
}

// export function setLoading(payload) {
//     return {
//         type: SET_LOADING,
//         payload
//     }
// }