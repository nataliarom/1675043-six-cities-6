import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {OfferProps} from "../../types/offer-props";
import FavoriteOfferCard from "../favorite-offer-card/favorite-offer-card";
import {fetchFavoriteHotels} from "../../store/api-actions";

const FavoriteOffers = ({favoriteOffers}) => {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {favoriteOffers.map((offer) => <FavoriteOfferCard
            title={offer.title}
            price={offer.price}
            previewImage={offer.previewImage}
            type={offer.type}
            key={offer.id}
            id={offer.id}
            rating={offer.rating}
          />)}
        </div>
      </li>
    </ul>

  );
};

FavoriteOffers.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(OfferProps))
};


const mapStateToProps = ({HOTEL}) => ({
  favoriteOffers: HOTEL.favoriteOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteHotels());
  },
});

export {FavoriteOffers};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteOffers);
