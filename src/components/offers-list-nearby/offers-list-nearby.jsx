import {connect} from 'react-redux';
import {OffersList} from "../offers-list/offers-list";


const mapStateToProps = ({HOTEL}) => {
  return {
    offers: HOTEL.nearbyOffers,
    activeOfferId: HOTEL.activeOfferId,
    offersOrder: HOTEL.offersOrder,
  };
};
const mapDispatchToProps = () => ({
  onActiveCardSelection() {
  },
});
const OffersListNearby = connect(mapStateToProps, mapDispatchToProps)(OffersList);
export {OffersListNearby};
