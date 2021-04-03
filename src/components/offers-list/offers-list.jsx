import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from "../offer-card/offer-card";
import {connect} from 'react-redux';
import {OffersOrder} from "../../const";
import {OfferType} from "../../types/offer-type";
import {getOffersFilteredByCity} from "../../store/hotel/selectors";
import {setActiveOffer} from "../../store/hotel/action";

export const CompareFunction = {
  [OffersOrder.POPULAR]: () => {
    return 0;
  },
  [OffersOrder.TOP_RATED]: (a, b) => {
    return b.rating - a.rating;
  },
  [OffersOrder.HIGH_TO_LOW]: (a, b) => {
    return b.price - a.price;
  },
  [OffersOrder.LOW_TO_HIGH]: (a, b) => {
    return a.price - b.price;
  }
};

const OffersList = ({className, offers, onActiveCardSelection, offersOrder}) => {

  const sortOffersWithSeectedOrder = (offerList, order) => [...offerList].sort(CompareFunction[order]);

  return (
    <div className={className}>
      {sortOffersWithSeectedOrder(offers, offersOrder).map((offer) => <OfferCard
        title={offer.title}
        isPremium={offer.isPremium}
        price={offer.price}
        previewImage={offer.previewImage}
        type={offer.type}
        key={`card-${offer.id}`}
        id={offer.id}
        rating={offer.rating}
        isFavorite={offer.isFavorite}
        onOfferCardSelection={onActiveCardSelection}
      />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferType)).isRequired,
  activeOfferId: PropTypes.number.isRequired,
  onActiveCardSelection: PropTypes.func.isRequired,
  offersOrder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};


const mapStateToProps = ({HOTEL}) => {
  return {
    offers: getOffersFilteredByCity(HOTEL),
    activeOfferId: HOTEL.activeOfferId,
    offersOrder: HOTEL.offersOrder,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onActiveCardSelection(newId, isEnteringCard) {
    dispatch(setActiveOffer(isEnteringCard ? newId : -1));
  },
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
