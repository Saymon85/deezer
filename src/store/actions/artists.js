import actionTypes from './actionTypes';
import axios from 'axios';
import axiosGet from '../../axios-instance';
import { artistsURL } from '../../utilities/deezerUrls';

const fetchArtistDataStart = () => {
    return {
        type: actionTypes.FETCH_ARTIST_DATA_START
    }
}

const fetchArtistDataSuccess = (artistData) => {
    return {
        type: actionTypes.FETCH_ARTIST_DATA_SUCCESS,
        artistData: artistData
    }
}

const fetchArtistDataFail = (error) => {
    return {
        type: actionTypes.FETCH_ARTIST_DATA_FAIL,
        error: error
    }
}


export const fetchArtistData = (artistID) => {
    fetchArtistDataStart();
    const url = `artist/${artistID}`;
    return dispatch => {
        axios.all([
            axiosGet.get(url),
            axiosGet.get(`url/${artistsURL[0]}`),
            axiosGet.get(`url/${artistsURL[1]}`),
            axiosGet.get(`url/${artistsURL[2]}`),
            axiosGet.get(`url/${artistsURL[3]}`),
            axiosGet.get(`url/${artistsURL[5]}`)
        ]).then(response => {
                console.log(response00);
        }).catch(err => dispatch(fetchArtistDataFail(err)));
    }
}