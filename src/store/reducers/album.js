import * as actionTypes from '../actions/actionTypes';

const initialState = {
    albumData : '',
    loading: true,
    error: null
}

const fetchAlbumDataStart = (state) => {
    return {
        ...state,
        loading: true
    }
}

const fetchAlbumDataSuccess = (state, albumData) => {
    return {
        ...state,
        albumData: albumData,
        loading: false
    }
}

const fetchAlbumDataFail = (state, error) => {
    return {
        ...state,
        error: error
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ALBUM_DATA_START:
            return fetchAlbumDataStart(state);
        case actionTypes.FETCH_ALBUM_DATA_SUCCESS:
            return fetchAlbumDataSuccess(state, action.albumData);
        case actionTypes.FETCH_ALBUM_DATA_FAIL:
            return fetchAlbumDataFail(state, action.err);
        default: 
            return state;            
    }
}

export default reducer;