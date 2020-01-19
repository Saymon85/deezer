import * as actionTypes from '../actions/actionTypes';

const initialState = {
    selection: {},
    charts: {},
    release: {},
    loading: true,
    error: null
}

export const fetchEditorialStart = (state, loading) => {
    return {
        ...state,
        loading: loading
    }
}

export const fetchEditorialDataSuccess = (state, editorialData) => {
    return {
        ...state,
        selection: editorialData.selection,
        charts: editorialData.charts,
        release: editorialData.release,
        loading: false
    }
}

export const fetchEditorialDataFail = (state, err) => {
    return {
        ...state,
        error: err,
        loading: false
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_EDITORIAL_DATA_SUCCESS:
            return fetchEditorialDataSuccess(state, action.editorialData);
        case actionTypes.FETCH_EDITORIAL_DATA_FAIL:
            return fetchEditorialDataFail(state, action.error);
        case actionTypes.FETCH_EDITORIAL_DATA_START:
            return fetchEditorialStart(state, action.loading);    
        default:
            return state;        
    }
}

export default reducer;