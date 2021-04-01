export const OffersOrder = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
  ROOT: `/`,
  ERROR: `/error`,
};

export const APIRoute = {
  HOTELS: `/hotels/`,
  COMMENTS: `/comments/`,
  LOGIN: `/login`,
  HOTELS_NEARBY: `/hotels/:id/nearby`,
  FAVORITE_HOTELS: `/favorite/`,
  FAVORITE_HOTELS_UPDATE: `/favorite/:id/:status`
};
