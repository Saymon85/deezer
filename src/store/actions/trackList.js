import * as actionTypes from './actionTypes';
import axios from 'axios';


export const fetchTrackListDataStart = () => {
    return {
        type: actionTypes.FETCH_TRACKLIST_DATA_START
    }
}

export const fetchTrackListDataSuccess = (trackListData) => {
    return {
        type: actionTypes.FETCH_TRACKLIST_DATA_SUCCESS,
        trackListData: trackListData
    }
}

export const fetchTrackListDataFail = (error) => {
    return {
        type: actionTypes.FETCH_TRACKLIST_DATA_FAIL,
        err: error
    }
}


export const fetchTrackListData = (trackListURL) => {
    fetchTrackListDataStart();
    return dispatch => {
        const url = 'https://cors-anywhere.herokuapp.com/' + trackListURL;
        axios.get(url)
            .then(response => {
                console.log(response.data);
                dispatch(fetchTrackListDataSuccess(response.data));          
            })
            .catch(err => {
                dispatch(fetchTrackListDataFail(err));
            })
    }
}