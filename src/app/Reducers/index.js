import { combineReducers } from 'redux';
import { auth, createUser } from './auth';
import load from './load';
import timer from './timer';

const rootReducer = combineReducers({
  auth,
  createUser,
  load,
  timer
});

export default rootReducer;