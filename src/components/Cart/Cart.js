import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../commonComponents";
import { UIButton } from "../../UIComponents";
import "../../utils";
import "./Cart.scss";

const data = [
  {
    id: 1,
    name: "food card",
    price: 21,
    original_price: 30,
    quantity: 2,
  },
  {
    id: 3,
    name: "epic card",
    price: 40,
    original_price: 40,
    quantity: 1,
  },
  {
    id: 2,
    name: "travel card",
    price: 20,
    original_price: 20,
    quantity: 1,
  },
];

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
          <div className="mt-2 title-text">Order Summary (3 items)</div>
          <div className="mt-2 d-flex flex-space-between flex-wrap mb-4">
            <div className="d-flex flex-column col-1-container">
              <div className="p-2">
                <div className="d-flex flex-space-between pb-1 border-bottom pl-1 pr-1 mb-2">
                  <div className="table-heading">S.No.</div>
                  <div className="table-heading">ITEMS</div>
                  <div className="table-heading">QTY</div>
                </div>
                <div className="border-bottom pl-1 pr-1 mb-2">
                  {data.map((ele, id) => (
                    <div
                      className="d-flex flex-space-between mb-2"
                      key={ele.id}
                    >
                      <div className="table-data">{id + 1}</div>
                      <div className="table-data">{ele.name.toTitleCase()}</div>
                      <div className="table-data">{ele.quantity}</div>
                    </div>
                  ))}
                </div>
                <div className="add-more-text pl-1 mb-2">
                  <Link to="/">
                    <i className="fa fa-plus mr-0dot5"></i>Add more items
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2-container">
              <div className="p-2">
                <div className="border-bottom pb-1 pl-1 mb-2">
                  <div className="sub-title-text">Price Details</div>
                </div>
                <div className="border-bottom pl-1 pr-1 mb-2">
                  {data.map((ele, id) => (
                    <div className="d-flex flex-space-between mb-2" key={id}>
                      <div className="">{`${ele.quantity} X $ ${ele.price}.00`}</div>
                      <div className="">{`$ ${
                        ele.quantity * ele.price
                      }.00`}</div>
                    </div>
                  ))}
                </div>
                <div className="border-bottom pl-1 pr-1 mb-2">
                  <div className="d-flex flex-space-between mb-2">
                    <div className="">Total Savings</div>
                    <div className="green-text">
                      {"- $ "}
                      {data.reduce((acc, currval) => {
                        acc =
                          acc +
                          (currval.original_price - currval.price) *
                            currval.quantity;
                        return acc;
                      }, 0)}
                      {".00"}
                    </div>
                  </div>
                  <div className="d-flex flex-space-between mb-2">
                    <div className="">Delivery Fee</div>
                    <div className="">{`$ 5.00`}</div>
                  </div>
                  <div className="d-flex flex-space-between mb-2">
                    <div className="">
                      Tax and Charges{" "}
                      <i className="fa fa-exclamation-circle ml-0dot5"></i>
                    </div>
                    <div className="">{`$ 2.00`}</div>
                  </div>
                </div>
                <div className="d-flex flex-space-between pl-1 pr-1 mb-2">
                  <div className="sub-title-text">To Pay</div>
                  <div className="sub-title-price-text">
                    {"$ "}
                    {data.reduce((acc, currval) => {
                      acc =
                        acc +
                        (currval.price * currval.quantity -
                          (currval.original_price - currval.price) *
                            currval.quantity);
                      return acc;
                    }, 7)}
                  </div>
                </div>
                <div className="d-flex justify-center pl-1 pr-1">
                  <UIButton type={"fill-in"} text={"PLACE ORDER"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
