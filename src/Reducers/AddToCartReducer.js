import { ADD_TO_CART } from '../Actions'

const intialState = {
    items: []
}

const addToCartReducer = ( state = intialState, action ) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: action.items
            }
        default: return state
    }
}

export default addToCartReducer