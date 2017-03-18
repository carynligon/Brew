import { combineReducers } from 'redux';
import auth from './auth';
import load from './load';

const rootReducer = combineReducers({
  auth,
  load
});

export default rootReducer;