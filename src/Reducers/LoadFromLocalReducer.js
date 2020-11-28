import { LOAD_FROM_LOCAL } from '../Actions'

const initialState = {
    localData: []
}

const loadFromLocalReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case LOAD_FROM_LOCAL:
            return {
                ...state,
                localData: action.localData
            }
        default: return state
    }
}

export default loadFromLocalReducer
