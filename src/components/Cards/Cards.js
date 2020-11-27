import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Navbar } from "../../commonComponents";
import { fetchCards } from "../../Actions";
import "./Cards.scss";

const Cards = (props) => {
  const { fetchCards, cards } = props;
  const url = "data.json";

  useEffect(() => {
    fetchCards(url);
  }, [fetchCards, url]);

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="container">
          <div className="d-flex justify-center mt-3">
            <div className="d-flex flex-column mb-3">
              <div className="title-text mb-0dot5"> Most Popular </div>
              <div className="d-flex flex-align-center">
                <div className="line mr-1" />
                <div className="icon-container">
                  <i className="fa fa-star star-icon"></i>
                </div>
                <div className="line ml-1" />
              </div>
            </div>
          </div>
          <div className="">
            {cards && cards.map((ele) => <span>{ele.name}</span>)}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { cards } = state;
  return { ...cards };
};

const mapActionCreator = { fetchCards };

export default connect(mapStateToProps, mapActionCreator)(Cards);
