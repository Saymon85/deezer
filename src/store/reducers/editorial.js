import * as actionTypes from '../actions/actionTypes';

const initialState = {
    selection: {},
    charts: {},
    release: {},
    error: null
}

export const fetchEditorialDataSuccess = (state, editorialData) => {
    return {
        ...state,
        selection: editorialData.selection,
        charts: editorialData.charts,
        release: editorialData.release
    }
}

export const fetchEditorialDataFail = (state, err) => {
    return {
        ...state,
        err
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_EDITORIAL_DATA_SUCCESS:
            return fetchEditorialDataSuccess(state, action.editorialData);
        case actionTypes.FETCH_EDITORIAL_DATA_FAIL:
            return fetchEditorialDataFail(state, action.error);
        default:
            return state;        
    }
}

export default reducer;