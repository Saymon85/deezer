import * as actionTypes from '../actions/actionTypes';


const initialState = {
    playlistData: null,
    loading: false,
    error: null,
    top100: {
        data: null,
        error: null
    },
    goodOldTimes: {
        data: null,
        error: null
    }
}

const fetchPlaylistDataStart = (state) => {
    return {
        ...state,
        loading: true
    }
}

const fetchPlaylistDataSuccess = (state, playlistData) => {
    return {
        ...state,
        playlistData: playlistData,
        loading: false
    }
}

const fetchPlaylistDataFail = (state, error) => {
    return {
        ...state,
        error: error,
        loading: false
    }
}

const fetchTop100DataSuccess = (state, top100Data) => {
    console.log(top100Data);
    return {
        ...state,
        top100: {
            data: top100Data,
            error: null
        }
    }
}

const fetchTop100DataFail = (state, error) => {
    return{
        ...state,
        top100: {
            data: [],
            error: error
        }
    }
}

const fetchGoodOldTimesDataSuccess = (state, goodOldTimesData) => {
    console.log(goodOldTimesData);
    return {
        ...state,
        goodOldTimes: {
            data: goodOldTimesData,
            error: null
        }
    }
}

const fetchGoodOldTimesDataFail = (state, error) => {
    return {
        ...state,
        goodOldTimes:{
            data: [],
            error: error
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PLAYLIST_DATA_START:
            return fetchPlaylistDataStart(state);
        case actionTypes.FETCH_PLAYLIST_DATA_SUCCESS:
            console.log(action.playlistData);
            return fetchPlaylistDataSuccess(state, action.playlistData);
        case actionTypes.FETCH_PLAYLIST_DATA_FAIL:
            return fetchPlaylistDataFail(state, action.error);        
        case actionTypes.FETCH_TOP100_DATA_SUCCESS:
            console.log(action.top100Data);
            return fetchTop100DataSuccess(state, action.top100Data);
        case actionTypes.FETCH_TOP100_DATA_FAIL:
            return fetchTop100DataFail(state, action.error);
        case actionTypes.FETCH_GOOD_OLD_TIMES_DATA_SUCCESS:
            console.log(action.goodOldTimesData);
            return fetchGoodOldTimesDataSuccess(state, action.goodOldTimesData);
        case actionTypes.FETCH_GOOD_OLD_TIMES_DATA_FAIL:
            return fetchGoodOldTimesDataFail(state, action.error);
        default:
            return state;        
    }
}


export default reducer;