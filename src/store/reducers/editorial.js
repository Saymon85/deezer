import * as actionTypes from '../actions/actionTypes';

const initialState = {
    selection: {},
    charts: {},
    release: {},
    loading: true,
    error: null
}

const fetchEditorialStart = (state) => {
    return {
        ...state,
        loading: true
    }
}

const fetchEditorialDataSuccess = (state, editorialData) => {
    return {
        ...state,
        selection: editorialData.selection,
        charts: editorialData.charts,
        release: editorialData.release,
        loading: false
    }
}

const fetchEditorialDataFail = (state, err) => {
    return {
        ...state,
        error: err,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_EDITORIAL_DATA_START:
            return fetchEditorialStart(state, action.loading);  
        case actionTypes.FETCH_EDITORIAL_DATA_SUCCESS:
            return fetchEditorialDataSuccess(state, action.editorialData);
        case actionTypes.FETCH_EDITORIAL_DATA_FAIL:
            return fetchEditorialDataFail(state, action.error);  
        default:
            return state;        
    }
}

export default reducer;