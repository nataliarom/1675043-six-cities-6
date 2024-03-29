import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from "../offer-card/offer-card";
import {OfferCardProps} from "../../types/offer-card-props";
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";
import {COMPARE_FUNCTIONS} from "../../const";


const OffersList = ({offers, onActiveCardSelection, offersOrder}) => {

  return (
    <div className="cities__places-list places__list tabs__content">
      {[...offers].sort(COMPARE_FUNCTIONS.get(offersOrder)).map((offer) => <OfferCard
        title={offer.title}
        isPremium={offer.isPremium}
        price={offer.price}
        previewImage={offer.previewImage}
        type={offer.type}
        key={`offer_card_` + offer.id}
        id={offer.id}
        rating={offer.rating}
        isFavorite={offer.isFavorite}
        onOfferCardSelection={onActiveCardSelection}
      />)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
    activeOfferId: state.activeOfferId,
    offersOrder: state.offersOrder,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onActiveCardSelection(newId, isEnteringCard) {
    dispatch(ActionCreator.setActiveOffer(isEnteringCard ? newId : -1));
  },
});

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferCardProps)).isRequired,
  activeOfferId: PropTypes.number.isRequired,
  onActiveCardSelection: PropTypes.func.isRequired,
  offersOrder: PropTypes.string.isRequired
};

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
