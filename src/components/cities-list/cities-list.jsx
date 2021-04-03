import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {CityType} from "../../types/city-type";
import {connect} from "react-redux";
import {getCities} from "../../store/hotel/selectors";
import {setCity} from "../../store/hotel/action";

const CitiesList = ({cities, currentCity, onCitySelect}) => {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, index)=>
            <li key={`city-${index}`} className="locations__item">
              <Link to="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  onCitySelect(city, index);
                }}
                className={
                  `locations__item-link tabs__item ${
                    currentCity && city && city.name === currentCity.name && `tabs__item--active`}`}>
                <span>{city.name}</span>
              </Link>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};
const mapStateToProps = ({HOTEL}) => {
  return {
    currentCity: HOTEL.city,
    cities: getCities(HOTEL)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCitySelect(city) {
    dispatch(setCity(city));
  },
});


CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape(CityType)),
  currentCity: PropTypes.shape(CityType),
  onCitySelect: PropTypes.func.isRequired
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
