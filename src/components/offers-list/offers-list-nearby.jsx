import {connect} from 'react-redux';
import {OffersList} from "./offers-list";


const mapStateToProps = (state) => {
  return {
    offers: state.nearbyOffers,
    activeOfferId: state.activeOfferId,
    offersOrder: state.offersOrder,
  };
};
const mapDispatchToProps = () => ({
  onActiveCardSelection() {
  },
});
const OffersListNearby = connect(mapStateToProps, mapDispatchToProps)(OffersList);
export {OffersListNearby};
