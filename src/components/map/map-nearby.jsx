import {connect} from "react-redux";
import {Map} from "./map";

const mapStateToProps = (state) => {
  return {
    currentCity: state.city,
    offers: [...state.nearbyOffers, state.openedOffer],
    activeOfferId: state.activeOfferId
  };
};

export {MapNearby};
const MapNearby = connect(mapStateToProps)(Map);

