import { createStore, compose } from 'redux';

import rootReducer from './reducers';

const defaultState = {
    currentTab: 0
};

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);


export default createStore(rootReducer, defaultState, enhancers);