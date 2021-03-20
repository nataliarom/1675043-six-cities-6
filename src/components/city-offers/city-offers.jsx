import React from 'react';
import OffersList from "../offers-list/offers-list";
import PropTypes from "prop-types";
import Map from "../map/map";
import OffersCount from "../offers-count/offers-count";
import {connect} from "react-redux";
import {OffersOrder} from "../offers-order/offers-orfer";
import {CityProps} from "../../types/city-props";

const CityOffers = ({city, offersCount}) => {

  return (

    offersCount > 0
      ? <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <OffersCount/>
          <OffersOrder/>
          <OffersList/>
        </section>
        <div className="cities__right-section">
          <Map />
        </div>
      </div>
      :
      <div className="cities__places-container container cities__places-container--empty">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in
              {city && city.name} </p>
          </div>
        </section>
        <div className="cities__right-section page page__main--index-empty">
        </div>
      </div>
  );
};

CityOffers.propTypes = {
  offersCount: PropTypes.number.isRequired,
  city: PropTypes.shape(CityProps),
};

const mapStateToProps = (state) => {
  return {
    offersCount: state.offersCount,
    city: state.city,
  };
};

export {CityOffers};
export default connect(mapStateToProps)(CityOffers);
