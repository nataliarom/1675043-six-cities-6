import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addToFavorites} from "../../store/api-actions";
import {AppRoute, AuthorizationStatus} from "../../const";
import {ActionCreator} from "../../store/action";


const BookmarkStatus = ({className, width, height, offerId, bookmarkStatus, authorizationStatus, onUpdateBookmarkStatus}) => {

  const handleAddToBookmarks = (evt) => {
    evt.preventDefault();
    onUpdateBookmarkStatus(offerId, bookmarkStatus ? 0 : 1, authorizationStatus);
  };

  return (
    <button className={`${className}-button ${bookmarkStatus ? `${className}-button--active` : ``} button`}
      onClick={handleAddToBookmarks} type="button">
      <svg className={`${className}-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>

  );
};
BookmarkStatus.propTypes = {
  offerId: PropTypes.number.isRequired,
  onUpdateBookmarkStatus: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  bookmarkStatus: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => {
  return {
    authorizationStatus: USER.authorizationStatus,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onUpdateBookmarkStatus(offerId, bookmarkStatus, authorizationStatus) {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(addToFavorites({offerId, status: bookmarkStatus}));
    } else {
      dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN));
    }
  }
});


export {BookmarkStatus};
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkStatus);
