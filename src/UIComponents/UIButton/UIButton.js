import React from "react";
import './UIButton.scss'

const UIButton = (props) => {
  const { type, text, clickAddToCart } = props;
  return (
    <input
      type="button"
      value={text}
      onClick={clickAddToCart}
      className={[type === "no-fill" ? "no-fill-btn" : "fill-btn", "btn"].join(
        " "
      )}
    />
  );
};

export default UIButton;
