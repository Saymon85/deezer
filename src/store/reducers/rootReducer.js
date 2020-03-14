import { combineReducers } from 'redux';
import editorialReducer from './editorial';
import radioReducer from './radio';
import chartsReducer from './charts';
import trackListReducer from './trackList';
import albumReducer from './album';
import playlistDataReducer from './playlists';

const rootReducer = combineReducers({
    editorial: editorialReducer,
    radio: radioReducer,
    charts: chartsReducer,
    playlistData: playlistDataReducer,
    trackList: trackListReducer,
    album: albumReducer
});

export default rootReducer;