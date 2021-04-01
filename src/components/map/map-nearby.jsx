import {connect} from "react-redux";
import {Map} from "./map";

const mapStateToProps = ({HOTEL, CITY}) => {
  return {
    currentCity: CITY.city,
    offers: [...HOTEL.nearbyOffers, HOTEL.openedOffer],
    activeOfferId: HOTEL.activeOfferId
  };
};

export {MapNearby};
const MapNearby = connect(mapStateToProps)(Map);

