import * as actionTypes from '../actions/actionTypes';

const initialState = {
    trackListData: null,
    loading: true,
    err: null
}


const fetchTrackListDataStart = (state) => {
    return {
        ...state,
        loading: true
    }
} 

const fetchTrackListDataSuccess = (state, trackListData) => {
    console.log(trackListData);
    return {
        ...state,
        trackListData: trackListData,
        loading: false
    }
}

const fetchTrackListDataFail = (state, error) => {
    return {
        ...state,
        err: error,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TRACKLIST_DATA_START: 
            return fetchTrackListDataStart(state);
        case actionTypes.FETCH_TRACKLIST_DATA_SUCCESS:
            return fetchTrackListDataSuccess(state, action.trackListData);
        case actionTypes.FETCH_TRACKLIST_DATA_FAIL:
            return fetchTrackListDataFail(state, action.err);
        default:
            return state;            
    }
}

export default reducer;