import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from "../offer-card/offer-card";

const OffersList = ({offers}) => {

  const [activeOfferCardId, setActiveOfferCardId] = useState(-1);

  const handleActiveCardSelection = (newId, isEnteringCard) => {
    setActiveOfferCardId(() => {
      if (!isEnteringCard && newId !== activeOfferCardId) {
        return activeOfferCardId;
      }
      return isEnteringCard ? newId : -1;
    });
  };

  return (
    <>
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
          onOfferCardActivation={(evt, target) => {
            handleActiveCardSelection(evt, target);
          }}
        />)}
      </div>
    </>
  );
};
OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    previewImage: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired}))
};
export default OffersList;
