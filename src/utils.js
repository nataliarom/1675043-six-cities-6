const processVal = (val) => {
  if (typeof val !== `object` || val === null) {
    return val;
  } else {
    return Array.isArray(val) ? val.map(processVal) : renameKeys(val);
  }
};
// TODO mapping instead
export const renameKeys = (obj) => Object.fromEntries(
    Object.entries(obj)
    .map(([key, val]) => [
      key.replace(/_(.)/g, (g) => g[1].toUpperCase()),
      processVal(val)
    ])
);
export const getOffersFilteredByCity = (allOffers, city) => {
  return allOffers.filter((offer)=> {
    return offer.city.name === city.name;
  });
};
// TODO refactor getCitiesFromOffersLis
export const getCitiesFromOffersList = (allOffers) => {
  let cities = [];
  allOffers.forEach((offer)=> {
    if (cities.findIndex((c) => c.name === offer.city.name) < 0) {
      cities.push(offer.city);
    }
  });
  return cities;
};
