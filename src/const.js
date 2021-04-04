export const MAX_PHOTO_LIST_SIZE = 6;
export const MAX_REVIEW_LIST_SIZE = 10;
export const DEFAULT_CITY_INDEX = 0;
export const RATING_STAR_WIDTH = 20;
export const TIMEOUT_ERROR_TEXT = `No Internet connection or server is unavailable`;
export const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404
};

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

export const BookmarkStatusOption = {
  NOT_FAVORITE: 0,
  FAVORITE: 1
};


