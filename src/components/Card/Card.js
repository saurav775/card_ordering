import React from "react";
import { UIButton } from '../../UIComponents';
import '../../utils';
import "./Card.scss";

const Card = (props) => {
  const {
    data: { id, name, description, final_price, original_price, img_url },
  } = props;

  return (
    <div className="card-container mb-5 d-flex flex-column">
      <img src={img_url} className="card-image" />
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
        <UIButton type={'no-fill'} text={'Add to cart'} />
      </div>
    </div>
  );
};

export default Card;
