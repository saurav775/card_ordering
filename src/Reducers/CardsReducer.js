import { FETCH_CARD_DATA } from "../Actions";

const intitialState = {
  cards: [],
};

const cardsReducer = (state = intitialState, action) => {
  switch (action.type) {
    case FETCH_CARD_DATA:
      return {
        ...state,
        cards: action.cards,
      };
    default:
      return state;
  }
};

export default cardsReducer;
