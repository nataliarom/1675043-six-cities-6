import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {CityProps} from "../../types/city-props";

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
const mapStateToProps = (state) => {
  return {
    currentCity: state.city,
    cities: state.cities
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCitySelect(city) {
    dispatch(ActionCreator.setCity(city));
  },
});


export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape(CityProps)),
  currentCity: PropTypes.shape(CityProps),
  onCitySelect: PropTypes.func.isRequired
};

