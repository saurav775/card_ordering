import { REMOVE_FROM_CART } from '../Actions'

const initialState = {
    updatedItems: []
}

const removeFromCartReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case REMOVE_FROM_CART:
            return {
                ...state,
                updatedItems: action.updatedItems
            }
        default: return state
    }
}

export default removeFromCartReducer