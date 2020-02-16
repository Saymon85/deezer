import * as actionTypes from '../actions/actionTypes';

const initialState = {
    charts: {},
    error: null
}


const fetchChartsDataSuccess = (state, chartsData) => {
    
    return {
        ...state,
        charts: chartsData
    }
}

const fetchChartsDataFail = (state, error) => {
    return {
        ...state,
        error: error
    }
}

const reducer = (state = initialState, action) => {
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