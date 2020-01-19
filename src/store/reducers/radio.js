import * as actionTypes from '../actions/actionTypes';


const initialState = {
    genres: {},
    top: {},
    lists: {},
    error: null
}

const fetchRadioDataSuccess = (state, radioData) => {
    return {
        ...state,
        genres: radioData.genres,
        top: radioData.top,
        lists: radioData.lists
    }
}

const fetchRadioDataFail = (state, err) => {
    return {
        ...state,
        error: err
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_RADIO_DATA_SUCCESS: 
            return fetchRadioDataSuccess(state, action.radioData);
        case actionTypes.FETCH_RADIO_DATA_FAIL:
            return fetchRadioDataFail(state, action.err);
        default:
            return state;        
    }
}

export default reducer;