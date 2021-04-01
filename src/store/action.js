
export const ActionType = {
  SET_CITY: `city/set`,
  UPDATE_OFFERS_COUNT: `offer/updateCount`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_HOTELS: `hotel/load`,
  LOAD_CITIES: `city/load`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  AUTHORIZE: `user/authorize`,
  UNAUTHORIZE: `user/unauthorize`,
  SET_ACTIVE_OFFER: `offer/setActive`,
  SET_OFFERS_ORDER: `offer/setOrder`,
  LOAD_HOTEL_BY_ID: `hotel/loadById`,
  LOAD_REVIEWS: `comment/load`,
  LOAD_NEARBY_HOTELS: `hotel/loadNearby`,
  LOAD_FAVORITE_HOTELS: `hotel/loadFavorite`,
  UPDATE_FAVORITE_STATUS: `hotel/updateFavoriteStatus`,
  FILTER_CITY_OFFERS: `hotel/filterByCity`,
  SET_REVIEW_ERROR: `comment/setError`,
  SET_REVIEW_SUCCESS: `comment/setSuccess`,
  SET_OFFER_404_ERROR: `offer/set404error`,
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  filterHotelsByCity: (city) => ({
    type: ActionType.FILTER_CITY_OFFERS,
    payload: city,
  }),
  authorize: (authInfo) => ({
    type: ActionType.AUTHORIZE,
    payload: authInfo,
  }),
  unauthorize: () => ({
    type: ActionType.UNAUTHORIZE,
  }),
  loadHotels: (hotels) => ({
    type: ActionType.LOAD_HOTELS,
    payload: hotels,
  }),
  loadCities: (cities) => ({
    type: ActionType.LOAD_CITIES,
    payload: cities,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setActiveOffer: (offerId) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offerId,
  }),
  setOffersOrder: (sortingOrder) => ({
    type: ActionType.SET_OFFERS_ORDER,
    payload: sortingOrder,
  }),
  loadHotelData: (hotel) => ({
    type: ActionType.LOAD_HOTEL_BY_ID,
    payload: hotel,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  loadNearbyHotels: (hotels) => ({
    type: ActionType.LOAD_NEARBY_HOTELS,
    payload: hotels,
  }),
  loadFavoriteHotels: (hotels) =>({
    type: ActionType.LOAD_FAVORITE_HOTELS,
    payload: hotels,
  }),
  updateFavoriteStatus: (hotel) =>({
    type: ActionType.UPDATE_FAVORITE_STATUS,
    payload: hotel,
  }),
  setReviewError: (error) => ({
    type: ActionType.SET_REVIEW_ERROR,
    payload: error,
  }),
  setReviewSuccess: () => ({
    type: ActionType.SET_REVIEW_SUCCESS,
  }),
  setOfferError: (error) => ({
    type: ActionType.SET_OFFER_404_ERROR,
    payload: error,
  }),
};
