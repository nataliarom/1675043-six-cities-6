
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import PageHeader from "../page-header/page-header";
import {fetchFavoriteHotels} from "../../store/api-actions";
import {connect} from "react-redux";
import LoadingScreen from "../loading-screen/loading-screen";
import FavoriteOffersEmpty from "../favorite-offers-list/favorire-offers-empty";
import FavoriteOffers from "../favorite-offers-list/favorite-offers-list";
import {OfferProps} from "../../types/offer-props";


const FavoritesPage = ({favoriteOffers, isFavoritesDataLoaded, onLoadData}) => {

  useEffect(() => {

    if (!isFavoritesDataLoaded) {
      onLoadData();
    }
  }, [isFavoritesDataLoaded]);

  if (!isFavoritesDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <PageHeader/>

      {favoriteOffers.length > 0 ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoriteOffers/>
            </section>
          </div>
        </main>
        : <FavoriteOffersEmpty/>}
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(OfferProps)),
  isFavoritesDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};


const mapStateToProps = ({HOTEL}) => ({
  favoriteOffers: HOTEL.favoriteOffers,
  isFavoritesDataLoaded: HOTEL.isFavoritesDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    // TODO checkAuth() before
    dispatch(fetchFavoriteHotels());
  },
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
