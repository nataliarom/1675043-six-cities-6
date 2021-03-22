

export const OffersOrder = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const COMPARE_FUNCTIONS = new Map();
COMPARE_FUNCTIONS.set(OffersOrder.POPULAR, () => {
  return 0;
});
COMPARE_FUNCTIONS.set(OffersOrder.TOP_RATED, (a, b) => {
  return b.rating - a.rating;
});
COMPARE_FUNCTIONS.set(OffersOrder.HIGH_TO_LOW, (a, b) => {
  return b.price - a.price;
});
COMPARE_FUNCTIONS.set(OffersOrder.LOW_TO_HIGH, (a, b) => {
  return a.price - b.price;
});

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
  ROOT: `/`,
};

export const APIRoute = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
};
