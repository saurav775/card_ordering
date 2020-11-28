import React, { useEffect } from "react";
import { connect } from "react-redux";
import { UIButton } from "../../UIComponents";
import { PlusMinus } from "../../commonComponents";
import { addToCart, loadFromLocal } from "../../Actions";
import "../../utils";
import "./Card.scss";

const Card = (props) => {
  const {
    data: { id, name, description, final_price, original_price, img_url },
    addToCart,
    items,
    loadFromLocal,
    localData,
  } = props;

  const handleAddToCart = () => {
    addToCart({ id, name, final_price, original_price });
  };

  useEffect(() => {
    loadFromLocal();
  }, [loadFromLocal, items]);

  return (
    <div className="card-container mb-5 d-flex flex-column">
      <div className="card-image-container">
        <img src={img_url} className="card-image" alt="card" />
        <div
          className={[
            "discount-badge",
            !(original_price - final_price) && "no-disp",
          ].join(" ")}
        >{`${100 - (final_price / original_price) * 100}% OFF`}</div>
      </div>
      <div className="d-flex mt-2 flex-space-between pl-1 pr-1">
        <div className="card-title">{name.toTitleCase()}</div>
        <div className="price">
          {original_price ? (
            <div className="d-flex">
              <div className="striked-price mr-1">{`$ ${original_price}.00`}</div>
              {`$ ${final_price}.00`}
            </div>
          ) : (
            `$ ${final_price}.00`
          )}
        </div>
      </div>
      <div className="desc-text mt-0dot5 pl-1 pr-1">{description}</div>
      <div className="pl-1 pr-1 mt-2">
        {localData &&
        localData.length > 0 &&
        localData.filter((e) => e.id === id).length > 0 &&
        localData.filter((e) => e.id === id)[0].quantity > 0 ? (
          <PlusMinus
            fromCard={true}
            cardData={{ id, name, final_price, original_price }}
          />
        ) : (
          <UIButton
            type={"no-fill"}
            text={"Add to cart"}
            clickAddToCart={() => handleAddToCart()}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { addToCart, loadFromLocal } = state;
  return { ...addToCart, ...loadFromLocal };
};

const mapActionCreator = { addToCart, loadFromLocal };

export default connect(mapStateToProps, mapActionCreator)(Card);
