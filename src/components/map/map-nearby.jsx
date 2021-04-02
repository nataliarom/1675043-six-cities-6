import {connect} from "react-redux";
import {Map} from "./map";
import {getNearbyOffersWithCurrentOffer} from "../../store/hotel/selectors";

const mapStateToProps = ({HOTEL}) => {
  return {
    currentCity: HOTEL.city,
    offers: getNearbyOffersWithCurrentOffer(HOTEL),
    activeOfferId: HOTEL.activeOfferId
  };
};

export {MapNearby};
const MapNearby = connect(mapStateToProps)(Map);

