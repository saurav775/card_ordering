import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../commonComponents";
import './Cart.scss'

const Cart = () => {
  return (
    <Fragment>
      <Navbar fromCart={true} />
      <div className="container">
        <div className="container">
          <div className="mt-2">
            <div className="back-link">
              <Link to="/">
                <i className="fa fa-arrow-left mr-0dot5"></i>
                <span className="">Back to home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
