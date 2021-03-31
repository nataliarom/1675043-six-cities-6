import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import PageHeader from "../page-header/page-header";
import ReviewsList from "../reviews-list/review-list";
import {addToFavorites, fetchNearbyOffers, fetchOfferById, fetchReviews} from "../../store/api-actions";
import {OfferProps} from "../../types/offer-props";
import LoadingScreen from "../loading-screen/loading-screen";
import {connect} from "react-redux";
import PhotoGallery from "../photo-gallery/photo-gallery";
import {OffersListNearby} from "../offers-list/offers-list-nearby";
import {MapNearby} from "../map/map-nearby";
import BookmarkStatus from "../bookmark-status/bookmark-status";

// TODO page not found redirect if no offer

const Room = ({id, openedOffer, onLoadData}) => {

  useEffect(() => {
    if (!openedOffer || openedOffer.id !== id) {
      onLoadData(id);
    }
  }, []);

  if (!openedOffer) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <PageHeader/>
      <main className="page__main page__main--property">
        <section className="property">
          <PhotoGallery/>
          <div className="property__container container">
            <div className="property__wrapper">
              {openedOffer && openedOffer.isPremium ? <div className="property__mark"><span>Premium</span></div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {openedOffer && openedOffer.title}
                </h1>
                <BookmarkStatus
                  className={`property__bookmark`}
                  width="31"
                  height="33"
                  offerId={openedOffer.id}
                  bookmarkStatus={openedOffer.isFavorite ? 1 : 0} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${openedOffer && openedOffer.rating * 20}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{openedOffer && openedOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {openedOffer && (openedOffer.type.charAt(0).toUpperCase() + openedOffer.type.substr(1).toLowerCase())}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {openedOffer && openedOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {openedOffer && openedOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{openedOffer && openedOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {openedOffer && openedOffer.goods.map((good)=>
                    <li key={`good-` + good} className="property__inside-item">
                      {good}
                    </li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className= {`property__avatar-wrapper ${openedOffer && openedOffer.host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={openedOffer && openedOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {openedOffer && openedOffer.host.name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {openedOffer && openedOffer.description}
                  </p>
                </div>
              </div>
              <ReviewsList/>
            </div>
          </div>
          <MapNearby className={`property__map`} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersListNearby className={`near-places__list places__list`} />
          </section>
        </div>
      </main>
    </div>
  );
};


Room.propTypes = {
  id: PropTypes.number.isRequired,
  openedOffer: PropTypes.shape(OfferProps),
  onLoadData: PropTypes.func.isRequired,
  onAddToBookmarks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  openedOffer: state.openedOffer,
});


const mapDispatchToProps = (dispatch) => ({
  onLoadData(offerId) {
    dispatch(fetchOfferById(offerId));
    dispatch(fetchReviews(offerId));
    dispatch(fetchNearbyOffers(offerId));
  },
  onAddToBookmarks(offerId, status) {
    dispatch(addToFavorites({offerId, status}));
  }
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
