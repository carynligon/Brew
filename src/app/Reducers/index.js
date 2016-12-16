import { combineReducers } from 'redux';
import auth from './auth';
import load from './load';

const Brew = combineReducers({
  auth,
  load
});

export default Brew;