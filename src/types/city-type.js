import PropTypes from "prop-types";
import {CityLocationType} from "./city-location-type";

export const CityType = {
  city: PropTypes.shape({
    location: PropTypes.shape(CityLocationType).isRequired,
    name: PropTypes.string.isRequired
  })};
