import { REMOVE_FROM_CART } from "./actionTypes";

const removeFromCartAC = (data) => {
  return {
    type: REMOVE_FROM_CART,
    updatedItems: data,
  };
};

const removeFromCart = (id) => (dispatch) => {
  const res = [];
  const items = JSON.parse(localStorage.getItem("items"));
  if (items && items.length > 0) {
    items.forEach((ele) => {
      if (ele.id === id) {
        if(ele.quantity >= 1) {
            ele.quantity = ele.quantity - 1
        }
        res.push(ele);
      } else {
        res.push(ele);
      }
    });
  }
  localStorage.setItem("items", JSON.stringify(res));
  dispatch(removeFromCartAC(res));
};

export default removeFromCart
