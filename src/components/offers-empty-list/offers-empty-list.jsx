import PropTypes from "prop-types";
import React from "react";
import {CityType} from "../../types/city-type";

const OffersEmptyList = ({city}) => {

  return (

    <div className="cities__places-container container cities__places-container--empty">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in
            {` ${city && city.name}`} </p>
        </div>
      </section>
      <div className="cities__right-section page page__main--index-empty">
      </div>
    </div>
  );
};

OffersEmptyList.propTypes = {
  city: PropTypes.shape(CityType),
};
export default OffersEmptyList;
