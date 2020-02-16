import * as actionTypes from './actionTypes';
import axiosGet from '../../axios-instance';



export const fetchAlbumDataStart = () => {
    return {
        type: actionTypes.FETCH_ALBUM_DATA_START
    }
}

export const fetchAlbumDataSuccess = (albumData) => {
    return {
        type: actionTypes.FETCH_ALBUM_DATA_SUCCESS,
        albumData: albumData
    }
}

export const fetchAlbumDataFail = (error) => {
    return {
        type: actionTypes.FETCH_ALBUM_DATA_FAIL,
        error: error
    }
}

export const fetchAlbumData = (albumID) => {
    fetchAlbumDataStart();
    return dispatch => {
        const albumURL = `album/${albumID}`;
        axiosGet.get(albumURL)
            .then(response => {
                console.log(response.data);
                dispatch(fetchAlbumDataSuccess(response.data));
            })
            .catch(err => {
                dispatch(fetchAlbumDataFail(err));
            })

    }
}