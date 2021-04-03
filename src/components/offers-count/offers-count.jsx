import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {CityType} from "../../types/city-type";
import {getOffersFilteredByCity} from "../../store/hotel/selectors";

const OffersCount = ({offersCount, currentCity}) => {

  const ONE_OFFER = 1;
  return (
    <b className="places__found">{offersCount} {offersCount === ONE_OFFER ? `place` : `places`} to stay in {currentCity.name}</b>
  );
};
const mapStateToProps = ({HOTEL}) => {
  return {
    currentCity: HOTEL.city,
    offersCount: getOffersFilteredByCity(HOTEL).length
  };
};


export {OffersCount};
export default connect(mapStateToProps)(OffersCount);

OffersCount.propTypes = {
  currentCity: PropTypes.shape(CityType).isRequired,
  offersCount: PropTypes.number.isRequired
};

