import * as actionTypes from '../actions/actionTypes';

const initialState = {
    goodOldTimesData: [],
    error: null
}

export const fetchGoodOldTimesDataSuccess = (state, goodOldTimesData) => {
    console.log(goodOldTimesData);
    return {
        ...state,
        goodOldTimes: goodOldTimesData
    }
}

export const fetchGoodOldTimesDataFail = (state, error) => {
    return {
        ...state,
        error: error
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_GOOD_OLD_TIMES_DATA_SUCCESS:
            return fetchGoodOldTimesDataSuccess(action.goodOldTimesData);
        case actionTypes.FETCH_GOOD_OLD_TIMES_DATA_FAIL:
            return fetchGoodOldTimesDataFail(action.error);
        default: 
            return state;        
    }
}

export default reducer;