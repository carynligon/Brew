import { combineReducers } from 'redux';
import auth from '~/redux/reducers/auth';
import load from '~/redux/reducers/load';
import timer from '~/redux/reducers/timer';

const rootReducer = combineReducers({
  auth,
  load,
  timer
});

export default rootReducer;