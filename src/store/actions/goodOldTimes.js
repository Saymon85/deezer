import * as actionTypes from './actionTypes';
import axiosGet from '../../axios-instance_2';
import axios from 'axios';
import { goodOldTimes} from '../../utilities/deezerUrls';


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
            console.log(response);
            const responseData = response.map(item => item.data);
            console.log(responseData);
            dispatch(fetchGoodOldTimesDataSuccess(responseData));
        }).catch(err => {
            dispatch(fetchGoodOldTimesDataFail(err));
        })
    }
}