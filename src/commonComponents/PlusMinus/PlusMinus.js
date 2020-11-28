import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToCart, loadFromLocal, removeFromCart } from "../../Actions";
import "./PlusMinus.scss";

const PlusMinus = (props) => {
  const {
    fromCard,
    addToCart,
    loadFromLocal,
    localData,
    items,
    cardData: { id, name, final_price, original_price },
    updatedItems,
    removeFromCart,
  } = props;
  const quantity = localData.filter((e) => e.id === id)[0].quantity;
  useEffect(() => {
    loadFromLocal();
  }, [loadFromLocal, items, updatedItems]);

  const handlePlus = () => {
    addToCart({ id, name, final_price, original_price });
  };

  const handleMinus = () => [removeFromCart(id)];

  return (
    <div className="d-flex flex-space-between w100">
      <div
        className={[
          "plusminus-icon-container d-flex flex-center minus",
          fromCard ? "blue-bg" : "grey-bg",
        ].join(" ")}
        onClick={handleMinus}
      >
        <i className="fa fa-minus"></i>
      </div>
      <div
        className={[
          "count-text d-flex flex-center",
          fromCard ? "blue-border" : "grey-border",
        ].join(" ")}
      >
        {quantity}
      </div>
      <div
        className={[
          "plusminus-icon-container d-flex flex-center plus",
          fromCard ? "blue-bg" : "grey-bg",
        ].join(" ")}
        onClick={handlePlus}
      >
        <i className="fa fa-plus"></i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { addToCart, loadFromLocal, removeFromCart } = state;
  return { ...addToCart, ...loadFromLocal, ...removeFromCart };
};

const mapActionCreator = { addToCart, loadFromLocal, removeFromCart };

export default connect(mapStateToProps, mapActionCreator)(PlusMinus);
