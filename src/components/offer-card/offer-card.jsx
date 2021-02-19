import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const OfferCard = ({id, title, price, isPremium, type, previewImage, rating, isFavorite, onOfferCardActivation}) => {

  return (
    <>
      <article className="cities__place-card place-card" onMouseEnter={() => {
        onOfferCardActivation(id, true);
      }} onMouseLeave={() => {
        onOfferCardActivation(id, false);
      }}>
        {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={`/offer/${id}`}>
            <img className="place-card__image" src={previewImage} width='260' height='200' alt='Place image'/>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">{!isFavorite ? `To bookmarks` : ``} </span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `80%`}}/>
              <span className="visually-hidden">Rating {rating}</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${id}`}>{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </>
  );
};
OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onOfferCardActivation: PropTypes.func.isRequired
};
export default OfferCard;
