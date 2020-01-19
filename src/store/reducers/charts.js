import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    charts: {},
    error: null
}


export const fetchChartsDataSuccess = (state, chartsData) => {
    return {
        ...state,
        charts: chartsData
    }
}

export const fetchChartsDataFail = (state, error) => {
    return {
        ...state,
        error: error
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_CHARTS_DATA_SUCCESS:
            return fetchChartsDataSuccess(state, action.chartsData);
        case actionTypes.FETCH_CHARTS_DATA_FAIL:
            return fetchChartsDataFail(state, action.error);
        default: 
            return state;        
    }
}


export default reducer;