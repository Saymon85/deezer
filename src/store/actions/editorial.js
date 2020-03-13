import * as actionTypes from './actionTypes';
import axiosGet from '../../axios-instance';
import axios from 'axios';
import { editorial } from '../../utilities/deezerUrls';



export const editorialFetchDataStart = () => {
    return {
        type: actionTypes.FETCH_EDITORIAL_DATA_START,
    }
}

export const editorialFetchDataSuccess = (selection, charts, release) => {
    return {
        type: actionTypes.FETCH_EDITORIAL_DATA_SUCCESS,
        editorialData: {
            selection: selection,
            charts: charts,
            release: release 
        }
    }
}

export const editorialFetchDataFail = (err) => {
    return {
        type: actionTypes.FETCH_EDITORIAL_DATA_FAIL,
        error: err
    }
}

export const  fetchEditorialData = () => {
    editorialFetchDataStart();
    return dispatch => {
        const [selection, charts, release ] = [...editorial];
        const fetchSelection = axiosGet.get(selection);
        const fetchCharts = axiosGet.get(charts);
        const fetchRelease = axiosGet.get(release);
        axios.all([fetchSelection, fetchCharts, fetchRelease])
            .then( response => {
               const selectionData = response[0].data;
               const chartsData = response[1].data;
               const releaseData = response[2].data.data;
               dispatch(editorialFetchDataSuccess(selectionData, chartsData, releaseData));
               
        })
            .catch(err => dispatch(editorialFetchDataFail(err)));
    }        
}
