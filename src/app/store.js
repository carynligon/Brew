import { createStore } from 'redux';

import rootReducer from './Reducers/index';

const defaultState = {};

const store = createStore(rootReducer, defaultState);

if (module.hot) {
    module.hot.accept('./Reducers/', () => {
        const nextRootReducer = require('./Reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;