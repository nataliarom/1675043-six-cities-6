import React from 'react';
import {Link} from 'react-router-dom';
import {FavoriteOfferCardProps} from "../../types/favorite-offer-card-props";
import BookmarkStatus from "../bookmark-status/bookmark-status";

const FavoriteOfferCard = ({id, title, price, type, previewImage, rating}) => {

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110"
            alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkStatus
            className={`place-card__bookmark`}
            width="18"
            height="19"
            offerId={id}
            bookmarkStatus={1} />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `100%`}}/>
            <span className="visually-hidden">Rating{rating}</span>
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
FavoriteOfferCard.propTypes = FavoriteOfferCardProps;
export default FavoriteOfferCard;
