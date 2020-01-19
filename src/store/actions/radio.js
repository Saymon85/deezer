import * as actionTypes from './actionTypes';
import axiosGet from '../../axios-instance';
import axios from 'axios';
import { radio } from '../../utilities/deezerUrls';


export const fetchRadioDataSuccess = (genres, top, lists) => {
    return {
        type: actionTypes.FETCH_RADIO_DATA_SUCCESS,
        radioData: {
            genres: genres,
            top: top,
            lists: lists
        }
    }
}

export const fetchRadioDataFail = (error) => {
    return {
        type: actionTypes.FETCH_RADIO_DATA_FAIL,
        err: error
    }
}

export const fetchRadioData = () => {
    return dispatch => {
        const [genres, top, lists] = [...radio];
        const fetchGenres = axiosGet.get(genres);
        const fetchTop = axiosGet.get(top);
        const fetchLists = axiosGet.get(lists);
        axios.all([fetchGenres, fetchTop, fetchLists])
            .then(response => {
/*                 console.log(response[0].data);
                console.log(response[1].data);
                console.log(response[2].data); */
                const genresData = response[0].data;
                const topData = response[1].data;
                const listsData = response[2].data;
                dispatch(fetchRadioDataSuccess(genresData, topData, listsData));
            })
            .catch(err => {
                dispatch(fetchRadioDataFail(err));
            })
    }
}