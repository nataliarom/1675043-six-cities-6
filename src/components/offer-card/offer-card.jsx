import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {OfferCardType} from "../../types/offer-card-type";
import BookmarkStatus from "../bookmark-status/bookmark-status";
import {BookmarkStatusOption, RATING_STAR_WIDTH} from "../../const";

const OfferCard = ({id, title, price, isPremium, type, previewImage, rating, isFavorite, onOfferCardSelection}) => {


  return (

    <article className="cities__place-card place-card" onMouseEnter={() => {
      onOfferCardSelection(id, true);
    }} onMouseLeave={() => {
      onOfferCardSelection(id, false);
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
          <BookmarkStatus
            className={`place-card__bookmark`}
            width="18"
            height="19"
            offerId={id}
            bookmarkStatus={isFavorite ? BookmarkStatusOption.FAVORITE : BookmarkStatusOption.NOT_FAVORITE} />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * RATING_STAR_WIDTH}%`}}/>
            <span className="visually-hidden">Rating {rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};
OfferCard.propTypes = {...OfferCardType,
  onOfferCardSelection: PropTypes.func.isRequired
};
export default OfferCard;
