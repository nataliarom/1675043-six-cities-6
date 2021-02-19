import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from "../offer-card/offer-card";
import {OfferCardProps} from "../../types/offer-card-props";

const OffersList = ({offers}) => {

  const [activeOfferCardId, setActiveOfferCardId] = useState(-1);

  const onActiveCardSelection = (newId, isEnteringCard) => {
    if (!isEnteringCard && newId !== activeOfferCardId) {
      return;
    }
    setActiveOfferCardId(isEnteringCard ? newId : -1);
  };


  return (

    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard
        title={offer.title}
        isPremium={offer.isPremium}
        price={offer.price}
        previewImage={offer.previewImage}
        type={offer.type}
        key={offer.id}
        id={offer.id}
        rating={offer.rating}
        isFavorite={offer.isFavorite}
        onOfferCardSelection={onActiveCardSelection}
      />)}
    </div>

  );
};
OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferCardProps))
};
export default OffersList;
