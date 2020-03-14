import * as actionTypes from './actionTypes';
import axiosGet from '../../axios-instance';
import axios from 'axios';
import { top100, goodOldTimes } from '../../utilities/deezerUrls';


// ###### FETCH GENERAL PLAYLIST DATA

const fetchPlaylistDataStart = () => {
    return {
        type: actionTypes.FETCH_PLAYLIST_DATA_START
    }
}

const fetchPlaylistDataSuccess = (playlistData) => {
    return {
        type: actionTypes.FETCH_PLAYLIST_DATA_SUCCESS,
        playlistData: playlistData
    }
}

const fetchPlaylistDataFail = (err) => {
    return {
        type: actionTypes.FETCH_PLAYLIST_DATA_FAIL,
        err: err
    }
} 

export const fetchPlaylistData = (playlistID) => {
    fetchPlaylistDataStart();
    const playlistURL = `playlist/${playlistID}`;
    return dispatch => {
        axiosGet.get(playlistURL)
            .then(response => {
                dispatch(fetchPlaylistDataSuccess(response.data));
            })
            .catch(err => {
                dispatch(fetchPlaylistDataFail(err));
            })    
    }
}



// ##### FETCH DATA FOR TOP100 PLAYLISTS ########

const fetchTop100DataSuccess = (top100Data) => {
    return {
        type: actionTypes.FETCH_TOP100_DATA_SUCCESS,
        top100Data: top100Data
    }
}

const fetchTop100DataFail = (error) => {
    return {
        type: actionTypes.FETCH_TOP100_DATA_FAIL,
        error: error
    }
}

export const fetchTop100Data = () => {
    return dispatch => {
        axios.all([
            axiosGet.get(top100[0]),
            axiosGet.get(top100[1]),
            axiosGet.get(top100[2]),
            axiosGet.get(top100[3]),
            axiosGet.get(top100[4]),
            axiosGet.get(top100[5]),
            axiosGet.get(top100[6]),
            axiosGet.get(top100[7])
        ]).then( response => {
            const responseData = response.map(item => item.data);
            dispatch(fetchTop100DataSuccess(responseData));
        }).catch(err => dispatch(fetchTop100DataFail(err)));
    }
}



// ###### FETCH GOOD OLD TIMES PLAYLIST DATA

const fetchGoodOldTimesDataSuccess = (goodOldTimesData) => {
    return {
        type: actionTypes.FETCH_GOOD_OLD_TIMES_DATA_SUCCESS,
        goodOldTimesData: goodOldTimesData
    }
}

const fetchGoodOldTimesDataFail = (error) => {
    return {
        type: actionTypes.FETCH_GOOD_OLD_TIMES_DATA_FAIL,
        error: error
    }
}

export const fetchGoodOldTimesData = () => {
    return dispatch => {
        axios.all([
            axiosGet.get(goodOldTimes[0]),
            axiosGet.get(goodOldTimes[1]),
            axiosGet.get(goodOldTimes[2]),
            axiosGet.get(goodOldTimes[3]),
            axiosGet.get(goodOldTimes[4]),
            axiosGet.get(goodOldTimes[5]),
            axiosGet.get(goodOldTimes[6]),
            axiosGet.get(goodOldTimes[7]),
        ]).then(response => {
            const responseData = response.map(item => item.data);
            dispatch(fetchGoodOldTimesDataSuccess(responseData));
        }).catch(err => {
            dispatch(fetchGoodOldTimesDataFail(err));
        })
    }
}
