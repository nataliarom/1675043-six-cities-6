import React, {useEffect} from 'react';
// import {useHistory} from 'react-router-dom';
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list";
import LoadingScreen from "../loading-screen/loading-screen";
import {connect} from "react-redux";
import {fetchOffersList} from "../../store/api-actions";
import CityOffers from "../city-offers/city-offers";
import PageHeader from "../page-header/page-header";

const Main = ({isDataLoaded, onLoadData}) => {
  // const history = useHistory(); for future usage

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
    <>
      <div className="page page--gray page--main">
        <PageHeader/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesList />
          <div className="cities">
            <CityOffers/>
          </div>
        </main>
      </div>
    </>
  );
};

Main.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
