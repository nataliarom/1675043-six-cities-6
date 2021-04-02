import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {OfferProps} from "../../types/offer-props";
import FavoriteOfferCard from "../favorite-offer-card/favorite-offer-card";
import {fetchFavoriteHotels} from "../../store/api-actions";

const FavoriteOffers = ({favoriteOffers}) => {

  const getCities = (offers) => (
    [...new Set(offers.map((offer)=>(offer.city.name)))]
  );

  const getOffersGroupedByCity = (offers) => {
    let cities = getCities(offers);
    return cities.reduce((cityToOffers, city) => {
      cityToOffers[city] = offers.filter((offer) => (offer.city.name === city));
      return cityToOffers;
    }, {});
  };

  const offersByCity = getOffersGroupedByCity(favoriteOffers);

  return (
    <ul className="favorites__list">
      {Object.keys(offersByCity).map(
          (city) => (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offersByCity[city].map((offer) => <FavoriteOfferCard
                  title={offer.title}
                  price={offer.price}
                  previewImage={offer.previewImage}
                  type={offer.type}
                  key={`favorite` + offer.id}
                  id={offer.id}
                  rating={offer.rating}
                />)}
              </div>
            </li>
          )
      )}
    </ul>
  );
};

FavoriteOffers.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(OfferProps))
};


const mapStateToProps = (state) => ({
  favoriteOffers: state.HOTEL.favoriteOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteHotels());
  },
});

export {FavoriteOffers};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteOffers);
