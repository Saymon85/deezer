import * as actionTypes from './actionTypes';
import axiosGet from '../../axios-instance';
import { charts } from '../../utilities/deezerUrls';

export const fetchChartsDataSuccess = (chartsData) => {
    return {
        type: actionTypes.FETCH_CHARTS_DATA_SUCCESS,
        chartsData: chartsData
    }
}

export const fetchChartsDataFail = (err) => {
    return {
        type: actionTypes.FETCH_CHARTS_DATA_FAIL,
        error: err
    }
}


export const fetchChartsData = () => {
    return dispatch => {
        axiosGet.get(charts)
            .then(response => {
                console.log(response.data);
                dispatch(fetchChartsDataSuccess(response.data));
            })
            .catch(err => {
                dispatch(fetchChartsDataFail(err));
            })
    }
}