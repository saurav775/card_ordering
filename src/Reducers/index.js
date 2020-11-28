import { combineReducers } from 'redux'
import cardsReducer from './CardsReducer'
import addToCartReducer from './AddToCartReducer'
import loadFromLocalReducer from './LoadFromLocalReducer'
import removeFromCartReducer from './RemoveFromCartReducer'

export default combineReducers({
    cards: cardsReducer,
    addToCart: addToCartReducer,
    loadFromLocal: loadFromLocalReducer,
    removeFromCart: removeFromCartReducer
})