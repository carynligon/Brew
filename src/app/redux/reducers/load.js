const initialState = {
    loading: false
}

const load = (state = initialState,action) => {
    switch(action.type) {
        case 'START_LOAD':
            return {...state, loading: true}
        case 'STOP_LOAD':
            return {...state, loading: false}
        default:
            return state;
    }
}

export default load;