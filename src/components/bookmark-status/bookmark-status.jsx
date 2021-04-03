import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addToFavorites} from "../../store/hotel/api-action";
import {AppRoute, AuthorizationStatus, BookmarkStatusOption} from "../../const";
import {redirectToRoute} from "../../store/user/action";


const BookmarkStatus = ({className, width, height, offerId, bookmarkStatus, authorizationStatus, onUpdateBookmarkStatus}) => {

  const handleAddToBookmarks = (evt) => {
    evt.preventDefault();
    onUpdateBookmarkStatus(offerId, bookmarkStatus ? BookmarkStatusOption.NOT_FAVORITE : BookmarkStatusOption.FAVORITE, authorizationStatus);
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
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.NO_AUTH, AuthorizationStatus.AUTH]).isRequired,
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
      dispatch(redirectToRoute(AppRoute.LOGIN));
    }
  }
});


export {BookmarkStatus};
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkStatus);
