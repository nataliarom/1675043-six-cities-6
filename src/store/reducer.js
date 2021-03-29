
import {ActionType} from './action';
import {AuthorizationStatus, OffersOrder} from "../const";
import {getOffersFilteredByCity} from "../utils";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
  city: null,
  hotels: [],
  offers: [],
  mapOffers: [],
  offersCount: 0,
  cities: [],
  isDataLoaded: false,
  activeOfferId: -1,
  offersOrder: OffersOrder.POPULAR,
  openedOffer: null,
  reviews: [],
  nearbyOffers: [],
};
// TODO split reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      const offers = getOffersFilteredByCity(state.hotels, action.payload);
      return {
        ...state,
        offers,
        mapOffers: offers,
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
    case ActionType.SET_OFFERS_ORDER:
      return {
        ...state,
        offersOrder: action.payload
      };
    case ActionType.LOAD_HOTEL_BY_ID:
      return {
        ...state,
        openedOffer: action.payload
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case ActionType.LOAD_NEARBY_HOTELS:
      return {
        ...state,
        nearbyOffers: action.payload,
        activeOfferId: state.openedOffer.id,
      };
  }

  return state;
};

export {reducer};
