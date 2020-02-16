import { combineReducers } from 'redux';
import reducer  from './reducer';
import editorialReducer from './editorial';
import radioReducer from './radio';
import chartsReducer from './charts';
import top100Reducer from './top100';
import goodOldTimesReducer from './goodOldTimes';
import trackListReducer from './trackList';
import albumReducer from './album';

const rootReducer = combineReducers({
    editorial: editorialReducer,
    radio: radioReducer,
    charts: chartsReducer,
    top100: top100Reducer,
    goodOldTimes: goodOldTimesReducer,
    trackList: trackListReducer,
    album: albumReducer,
    reducer: reducer
});

export default rootReducer;