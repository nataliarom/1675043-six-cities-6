import {CITIES} from "../const";


export const ActionType = {
  SET_CITY: `city/set`,
  UPDATE_CITY_OFFERS: `offer/updateList`,
  UPDATE_OFFERS_COUNT: `offer/updateCount`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_HOTELS: `hotels/load`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  AUTHORIZE: `user/authorize`,
  UNAUTHORIZE: `user/unauthorize`,
};

export const ActionCreator = {
  setCity: (city, index) => ({
    type: ActionType.SET_CITY,
    payload: CITIES[index],
  }),
  loadCityOffers: (city, index) => ({
    type: ActionType.UPDATE_CITY_OFFERS,
    payload: index ? CITIES[index] : CITIES.find((c)=> c === city),
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
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
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  })
};
