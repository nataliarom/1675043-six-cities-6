export const getOffersFilteredByCity = (allOffers, city) => {
  const offersFilteredByCity = allOffers.filter(function (offer) {
    return offer.city.name === city.name;
  });
  return offersFilteredByCity;
};

