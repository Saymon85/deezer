import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer  from './store/reducers/reducer';
import editorialReducer from './store/reducers/editorial';
import radioReducer from './store/reducers/radio';
import chartsReducer from './store/reducers/charts';
import top100Reducer from './store/reducers/top100';
import goodOldTimesReducer from './store/reducers/goodOldTimes';
import trackListReducer from './store/reducers/trackList';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
      editorial: editorialReducer,
      radio: radioReducer,
      charts: chartsReducer,
      top100: top100Reducer,
      goodOldTimes: goodOldTimesReducer,
      trackList: trackListReducer,
      reducer: reducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider> 
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
