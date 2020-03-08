import * as actionTypes from './actionTypes';
import axiosGet from '../../axios-instance_2';
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
            axiosGet.get(top100[3]),
            axiosGet.get(top100[4]),
            axiosGet.get(top100[5]),
            axiosGet.get(top100[6]),
            axiosGet.get(top100[7])
        ]).then( response => {
            const responseData = response.map(item => item.data);
            console.log(responseData);
            dispatch(fetchTop100DataSuccess(responseData));
        }).catch(err => dispatch(fetchTop100DataFail(err)));
    }
}