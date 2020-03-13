import { combineReducers } from 'redux';
import reducer  from './reducer';
import editorialReducer from './editorial';
import radioReducer from './radio';
import chartsReducer from './charts';
/* import top100Reducer from './top100';
import goodOldTimesReducer from './goodOldTimes'; */
import trackListReducer from './trackList';
import albumReducer from './album';
import playlistDataReducer from './playlists';

const rootReducer = combineReducers({
    editorial: editorialReducer,
    radio: radioReducer,
    charts: chartsReducer,
    playlistData: playlistDataReducer,
    trackList: trackListReducer,
    album: albumReducer,
    reducer: reducer
});

export default rootReducer;