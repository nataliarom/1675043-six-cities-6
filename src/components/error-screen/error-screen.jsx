import React from 'react';
import PropTypes from "prop-types";
import {ErrorType} from "../../types/error-type";

const ErrorScreen = ({error}) => {
  return (
    <p>Error! {error.message}</p>
  );
};

ErrorScreen.propTypes = {
  error: PropTypes.shape(ErrorType).isRequired,
};

export default ErrorScreen;
