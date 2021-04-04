
import PropTypes from "prop-types";


export const ErrorType = {
  code: PropTypes.number,
  isNotFoundError: PropTypes.bool,
  isBadRequest: PropTypes.bool,
  isUnauthorized: PropTypes.bool,
  isTimeout: PropTypes.bool,
  message: PropTypes.string,
};
