import PropTypes from "prop-types";
import {CityLocationProps} from "./city-location-props";

export const MapProps = {
  cityLocation: PropTypes.shape(CityLocationProps),
  points: PropTypes.arrayOf(PropTypes.array)
};
