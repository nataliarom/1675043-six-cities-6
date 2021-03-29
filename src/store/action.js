
export const ActionType = {
  SET_CITY: `city/set`,
  UPDATE_OFFERS_COUNT: `offer/updateCount`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_HOTELS: `hotels/load`,
  LOAD_CITIES: `cities/load`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  AUTHORIZE: `user/authorize`,
  UNAUTHORIZE: `user/unauthorize`,
  SET_ACTIVE_OFFER: `offer/setActive`,
  SET_OFFERS_ORDER: `offer/setOrder`,
  LOAD_HOTEL_BY_ID: `hotel/loadById`,
  LOAD_REVIEWS: `comments/load`,
  LOAD_NEARBY_HOTELS: `hotels/loadNearby`,
  CLEAR_OFFERS_DATA: `offer/clear`

};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
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
  clearOffersData: ()=>({
    type: ActionType.CLEAR_OFFERS_DATA,
  })
};
