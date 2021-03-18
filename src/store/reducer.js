
import {ActionType} from './action';
import {DEFAULT_CITY, CITIES, AuthorizationStatus} from "../const";
import {getOffersFilteredByCity} from "../utils";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
  city: DEFAULT_CITY,
  hotels: [],
  offers: [],
  offersCount: 0,
  cities: CITIES,
  isDataLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.UPDATE_CITY_OFFERS:
      const offers = getOffersFilteredByCity(state.hotels, action.payload);
      return {
        ...state,
        offers,
        offersCount: offers.length
      };
    case ActionType.UNAUTHORIZE:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: null
      };
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        isDataLoaded: true
      };
    case ActionType.AUTHORIZE:
      return {
        ...state,
        authInfo: action.payload,
        authorizationStatus: AuthorizationStatus.AUTH
      };
  }

  return state;
};

export {reducer};
