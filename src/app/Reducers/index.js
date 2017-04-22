import { combineReducers } from 'redux';
import auth from './auth';
import load from './load';
import timer from './timer';

const rootReducer = combineReducers({
  auth,
  load,
  timer
});

export default rootReducer;