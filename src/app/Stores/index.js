import { createStore } from 'redux';
import combReducers from '../Reducers/index';

const store = createStore(combReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__);

export default store;
