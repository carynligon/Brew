const timerState = (state = [], action) => {
    switch(action.type) {
        case('START_TIMER'):
            let time;
            if (action.time) time = action.time;
            else time = 0;
            return {...state,
                time: time + 1
            };
        case('STOP_TIMER'):
            console.log('default', state);
            return state;
        default:
            console.log('default', state);
            return state;
    }
}
 export default timerState;