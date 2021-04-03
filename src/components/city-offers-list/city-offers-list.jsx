import React from 'react';
import OffersList from "../offers-list/offers-list";
import PropTypes from "prop-types";
import Map from "../map/map";
import OffersCount from "../offers-count/offers-count";
import {connect} from "react-redux";
import {CityType} from "../../types/city-type";
import OffersSortingOrder from "../offers-sorting-order/offers-sorting-order";
import {getOffersFilteredByCity} from "../../store/hotel/selectors";
import OffersEmptyList from "../offers-empty-list/offers-empty-list";

const CityOffersList = ({city, offersCount}) => {

  return (

    offersCount > 0
      ? <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <OffersCount/>
          <OffersSortingOrder/>
          <OffersList className={`cities__places-list places__list tabs__content`}/>
        </section>
        <div className="cities__right-section">
          <Map className={`cities__map`} />
        </div>
      </div>
      :
      <OffersEmptyList city={city}/>
  );
};

CityOffersList.propTypes = {
  offersCount: PropTypes.number.isRequired,
  city: PropTypes.shape(CityType),
};

const mapStateToProps = ({HOTEL}) => {
  return {
    offersCount: getOffersFilteredByCity(HOTEL).length,
    city: HOTEL.city,
  };
};

export {CityOffersList};
export default connect(mapStateToProps)(CityOffersList);
