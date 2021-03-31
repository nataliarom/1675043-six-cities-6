
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
  isFavoritesDataLoaded: false,
  favoriteOffers: [],
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
    case ActionType.LOAD_FAVORITE_HOTELS:
      return {
        ...state,
        favoriteOffers: action.payload,
        isFavoritesDataLoaded: true,
      };
    case ActionType.UPDATE_FAVORITE_STATUS:
      const hotels = state.hotels.map((hotel)=>(hotel.id === action.payload.id ? action.payload : hotel));
      return {
        ...state,
        favoriteOffers: action.payload.isFavorite
          ? [...state.favoriteOffers, action.payload]
          : state.favoriteOffers.filter((offer)=>(offer.id !== action.payload.id)),
        openedOffer: (state.openedOffer && state.openedOffer.id === action.payload.id) ? action.payload : null,
        hotels,
        offers: getOffersFilteredByCity(hotels, state.city),
      };
  }
  return state;
};

export {reducer};
