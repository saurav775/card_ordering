import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Logo } from "../../SvgComponents";
import { dummyProfilePic } from "../../imports";
import "./Navbar.scss";

const Navbar = (props) => {
  const { fromCart, localData } = props;
  return (
    <div className={[fromCart && "cart-nav"].join(" ")}>
      <div className="container">
        <div className="d-flex flex-space-between pt-1 pb-1">
          <div className="d-flex flex-align-center">
            <Logo width={"36px"} height={"36px"} />{" "}
            <span className="logo ml-0dot5">Happay</span>
          </div>
          <div className="d-flex flex-align-center">
            {!fromCart && (
              <Link to="/cart">
                <div className="cart-icon-container">
                  <div className="count-items d-flex flex-center">
                    {localData.reduce((acc, cv) => {
                      acc = acc + cv.quantity;
                      return acc;
                    }, 0)}
                  </div>
                  <i className="fa fa-shopping-cart cart-icon"></i>
                </div>
              </Link>
            )}
            <img
              src={dummyProfilePic}
              alt="profile-pic"
              className="avatar ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { loadFromLocal } = state;
  return { ...loadFromLocal };
};

export default connect(mapStateToProps, {})(Navbar);
