
import {ActionType} from './action';
import {AuthorizationStatus} from "../const";
import {getOffersFilteredByCity} from "../utils";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
  city: undefined,
  hotels: [],
  offers: [],
  offersCount: 0,
  cities: [],
  isDataLoaded: false,
  activeOfferId: -1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      const offers = getOffersFilteredByCity(state.hotels, action.payload);
      return {
        ...state,
        offers,
        offersCount: offers.length,
        city: action.payload,
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
    case ActionType.LOAD_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case ActionType.AUTHORIZE:
      return {
        ...state,
        authInfo: action.payload,
        authorizationStatus: AuthorizationStatus.AUTH
      };
    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOfferId: action.payload
      };
  }

  return state;
};

export {reducer};
