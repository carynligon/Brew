import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';
import auth from '~/redux/reducers/auth';
import load from '~/redux/reducers/load';
import timer from '~/redux/reducers/timer';

const sceneReducer = (state = {}, {type, scene}) => {
    switch(type){
        case ActionConst.FOCUS:
            return { ...state, scene };
        default:
            return state;
    }    
}

const rootReducer = combineReducers({
  auth,
  load,
  sceneReducer,
  timer
});

export default rootReducer;