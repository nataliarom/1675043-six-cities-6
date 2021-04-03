
import React, {useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from "prop-types";
import PageHeader from "../page-header/page-header";
import {checkAuth} from "../../store/user/api-action";
import {fetchFavoriteHotels} from "../../store/hotel/api-action";
import {connect} from "react-redux";
import LoadingScreen from "../loading-screen/loading-screen";
import FavoriteOffersEmptyList from "../favorite-offers-empty-list/favorire-offers-empty-list";
import FavoriteOffers from "../favorite-offers-list/favorite-offers-list";
import {OfferType} from "../../types/offer-type";
import {AppRoute, AuthorizationStatus} from "../../const";


const FavoritesPage = ({authorizationStatus, favoriteOffers, isFavoritesDataLoaded, onLoadData}) => {

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

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return (
      <Redirect to={AppRoute.LOGIN}/>
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
        : <FavoriteOffersEmptyList/>}
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(OfferType)),
  isFavoritesDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.NO_AUTH, AuthorizationStatus.AUTH]).isRequired,
};


const mapStateToProps = ({HOTEL, USER}) => ({
  favoriteOffers: HOTEL.favoriteOffers,
  isFavoritesDataLoaded: HOTEL.isFavoritesDataLoaded,
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(checkAuth());
    dispatch(fetchFavoriteHotels());
  },
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
