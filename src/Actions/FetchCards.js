import axios from "axios";
import { FETCH_CARD_DATA } from "./actionTypes";

const CardsAC = (data) => {
  return {
    type: FETCH_CARD_DATA,
    cards: data,
  };
};

const fetchCards = (url) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    dispatch(CardsAC(response.data));
  } catch (e) {
    console.error(e);
  }
};

export default fetchCards;
