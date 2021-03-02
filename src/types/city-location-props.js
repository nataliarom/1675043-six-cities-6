import PropTypes from "prop-types";

export const CityLocationProps = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired
};
