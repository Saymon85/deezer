import actionTypes from '../actions/actionTypes';

const initialState = {
      artistData: {},
      loading: true,
      error: null 
}

const fetchArtistDataStart = (state) => {
    return{
        ...state,
        loading: true
    }
}

const fetchArtistDataSuccess = (state, artistData) => {
    return {
        ...state,
        artistData: artistData,
        loading: false
    }
}

const fetchArtistDataFail = (state, error) => {
    return {
        ...state,
        error: error,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ARTIST_DATA_START:
            fetchArtistDataStart(state);
        case actionTypes.FETCH_ARTIST_DATA_SUCCESS:
            fetchArtistDataSuccess(state, action.artistData);
        case actionTypes.FETCH_ARTIST_DATA_FAIL:
            fetchArtistDataFail(state, action.error);
        default:
            return state;            
    }
}

export default reducer;