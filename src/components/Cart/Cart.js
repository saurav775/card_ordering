import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, PlusMinus } from "../../commonComponents";
import { UIButton } from "../../UIComponents";
import { loadFromLocal } from "../../Actions";
import { toTitleCase } from "../../utils";
import "./Cart.scss";

const Cart = (props) => {
  const { localData, loadFromLocal } = props;

  useEffect(() => {
    loadFromLocal();
  }, [loadFromLocal]);

  return (
    <Fragment>
      <Navbar fromCart={true} />
      <div className="container">
        <div className="container removeOnMobile">
          <div className="mt-2">
            <div className="back-link">
              <Link to="/">
                <i className="fa fa-arrow-left mr-0dot5"></i>
                <span className="">Back to home</span>
              </Link>
            </div>
          </div>
          <div className="mt-2 title-text">
            Order Summary ({localData.filter((e) => e.quantity > 0).length})
          </div>
          <div className="mt-2 d-flex flex-space-between flex-wrap mb-4">
            <div className="d-flex flex-column col-1-container">
              <div className="p-2 pm-2">
                <div className="d-flex flex-space-between pb-1 border-bottom pl-1 pr-1 mb-2">
                  <div className="table-heading slno d-flex justify-center">
                    S.No.
                  </div>
                  <div className="table-heading items d-flex justify-center">
                    ITEMS
                  </div>
                  <div className="table-heading qty d-flex justify-center">
                    QTY
                  </div>
                </div>
                <div className="border-bottom pl-1 pr-1 mb-2">
                  {localData.filter((e) => e.quantity > 0).length > 0 ? (
                    localData
                      .filter((e) => e.quantity > 0)
                      .map(
                        (ele, id) =>
                          ele.quantity > 0 && (
                            <div
                              className="d-flex flex-space-between mb-2"
                              key={ele.id}
                            >
                              <div className="table-data slno d-flex justify-center">
                                {id + 1}
                              </div>
                              <div className="table-data items d-flex justify-center">
                                {toTitleCase(ele.name)}
                              </div>
                              <div className="table-data qty d-flex justify-center">
                                <PlusMinus
                                  cardData={{
                                    id: ele.id,
                                    name: ele.name,
                                    final_price: ele.final_price,
                                    original_price: ele.original_price,
                                  }}
                                />
                              </div>
                            </div>
                          )
                      )
                  ) : (
                    <div className="table-data mb-2">No items to display</div>
                  )}
                </div>
                <div className="add-more-text pl-1 mb-2">
                  <Link to="/">
                    <i className="fa fa-plus mr-0dot5"></i>
                    {localData.filter((e) => e.quantity > 0).length > 0
                      ? "Add more items"
                      : "Add items"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2-container">
              <div className="p-2 pm-2">
                <div className="border-bottom pb-1 pl-1 mb-2">
                  <div className="sub-title-text">Price Details</div>
                </div>
                <div className="border-bottom pl-1 pr-1 mb-2">
                  {localData.filter((e) => e.quantity > 0).length > 0 ? (
                    localData.map(
                      (ele, id) =>
                        ele.quantity > 0 && (
                          <div
                            className="d-flex flex-space-between mb-2"
                            key={id}
                          >
                            <div className="">{`${ele.quantity} X $ ${ele.price}.00`}</div>
                            <div className="">{`$ ${
                              ele.quantity * ele.price
                            }.00`}</div>
                          </div>
                        )
                    )
                  ) : (
                    <div className="mb-2">No items to display</div>
                  )}
                </div>
                <Fragment>
                  {localData.filter((e) => e.quantity > 0).length > 0 && (
                    <Fragment>
                      <div className="border-bottom pl-1 pr-1 mb-2">
                        <div className="d-flex flex-space-between mb-2">
                          <div className="">Total Savings</div>
                          <div className="green-text">
                            {"- $ "}
                            {localData.reduce((acc, currval) => {
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
                          {localData.reduce((acc, currval) => {
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
                    </Fragment>
                  )}
                </Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { loadFromLocal } = state;
  return { ...loadFromLocal };
};

const mapActionCreator = { loadFromLocal };

export default connect(mapStateToProps, mapActionCreator)(Cart);
