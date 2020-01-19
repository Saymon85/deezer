import * as actionTypes from '../actions/actionTypes';


const initialState = {
    top100: [],
    error: null
}


export const fetchTop100DataSuccess = (state, top100Data) => {
    console.log(top100Data);
    return {
        ...state,
        top100: top100Data
    }
}

export const fetchTop100DataFail = (state, error) => {
    return{
        ...state,
        error: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_TOP100_DATA_SUCCESS:
            return fetchTop100DataSuccess(state, action.top100Data);
        case actionTypes.FETCH_TOP100_DATA_FAIL:
            return fetchTop100DataFail(state, action.error);
        default:
            return state;        
    }
}

export default reducer;