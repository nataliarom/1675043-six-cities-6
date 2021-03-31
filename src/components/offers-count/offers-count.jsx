import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {CityProps} from "../../types/city-props";

const OffersCount = ({offersCount, currentCity}) => {
  return (
    <b className="places__found">{offersCount} {offersCount === 1 ? `place` : `places`} to stay in {currentCity.name}</b>
  );
};
const mapStateToProps = ({HOTEL}) => {
  return {
    currentCity: HOTEL.city,
    offersCount: HOTEL.offersCount
  };
};


export {OffersCount};
export default connect(mapStateToProps)(OffersCount);

OffersCount.propTypes = {
  currentCity: PropTypes.shape(CityProps).isRequired,
  offersCount: PropTypes.number.isRequired
};

