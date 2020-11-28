import { ADD_TO_CART } from "./actionTypes";

const addToCartAC = (data) => {
  return {
    type: ADD_TO_CART,
    items: data,
  };
};

const addToCart = (data) => (dispatch) => {
  const { id, name, final_price, original_price } = data;
  const res = [];
  let exists = false;
  const items = JSON.parse(localStorage.getItem("items"));
  if (items && items.length > 0) {
    items.forEach((ele) => {
      if (ele.id === id) {
        ele.quantity = ele.quantity + 1;
        res.push(ele);
        exists = true;
      } else {
        res.push(ele);
      }
    });
  }
  if (!exists) {
    res.push({
      id,
      name,
      price: final_price,
      original_price: original_price ? original_price : final_price,
      quantity: 1,
    });
  }
  localStorage.setItem("items", JSON.stringify(res));
  dispatch(addToCartAC(res));
};

export default addToCart;
