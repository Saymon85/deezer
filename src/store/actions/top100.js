import * as actionTypes from './actionTypes';
import axiosGet from '../../axios-instance';
import axios from 'axios';
import { top100 } from '../../utilities/deezerUrls';

export const fetchTop100DataSuccess = (top100Data) => {
    return {
        type: actionTypes.FETCH_TOP100_DATA_SUCCESS,
        top100Data: top100Data
    }
}

export const fetchTop100DataFail = (error) => {
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
            axiosGet.get(top100[3])
        ]).then( response => {
            console.log(response);
            fetchTop100DataSuccess(response.data);
        }).catch(err => fetchTop100DataFail(err));
    }
}