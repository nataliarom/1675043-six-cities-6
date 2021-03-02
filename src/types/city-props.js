import PropTypes from "prop-types";
import {CityLocationProps} from "./city-location-props";

export const CityProps = {
  city: PropTypes.shape({
    location: PropTypes.shape(CityLocationProps).isRequired,
    name: PropTypes.string.isRequired
  })};
