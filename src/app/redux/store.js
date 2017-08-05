import { createStore } from 'redux';

import rootReducer from './reducers/index';

const defaultState = {};

const store = createStore(rootReducer, defaultState);

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;