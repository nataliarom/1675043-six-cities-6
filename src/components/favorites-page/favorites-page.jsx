
import React from 'react';
import {Link} from 'react-router-dom';
import FavoriteOfferCard from "../favorite-offer-card/favorite-offer-card";
import {FavoriteOfferCardProps} from "../../types/favorite-offer-card-props";
import PropTypes from "prop-types";
import PageHeader from "../page-header/page-header";

const FavoritesPage = ({favoriteOffers}) => {

  return (
    <>
      <div className="page">
        <PageHeader/>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
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

                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Cologne</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <article className="favorites__card place-card">
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <a href="#">
                          <img className="place-card__image" src="img/apartment-small-04.jpg" width="150" height="110" alt="Place image"/>
                        </a>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;180</b>
                            <span className="place-card__price-text">&#47;&nbsp;night</span>
                          </div>
                          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                            <svg className="place-card__bookmark-icon" width="18" height="19">
                              <use xlinkHref="#icon-bookmark"/>
                            </svg>
                            <span className="visually-hidden">In bookmarks</span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{width: `100%`}}/>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <a href="#">White castle</a>
                        </h2>
                        <p className="place-card__type">Apartment</p>
                      </div>
                    </article>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to="/">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    </>);
};
FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(FavoriteOfferCardProps))
};

export default FavoritesPage;
