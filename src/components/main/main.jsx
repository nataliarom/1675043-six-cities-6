import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list";
import LoadingScreen from "../loading-screen/loading-screen";
import {connect} from "react-redux";
import {fetchOffersList} from "../../store/hotel/api-action";
import CityOffers from "../city-offers-list/city-offers-list";
import PageHeader from "../page-header/page-header";
import {getOffersFilteredByCity} from "../../store/hotel/selectors";

const Main = ({isDataLoaded, onLoadData, offersCount}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <div className={`page page--gray page--main ${offersCount === 0 && `page__main--index-empty`}`}>
      <PageHeader/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <CityOffers/>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  offersCount: PropTypes.number.isRequired,
};

const mapStateToProps = ({HOTEL}) => ({
  isDataLoaded: HOTEL.isDataLoaded,
  offersCount: getOffersFilteredByCity(HOTEL).length
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
