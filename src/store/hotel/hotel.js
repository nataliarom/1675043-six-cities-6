import {OffersOrder} from "../../const";
import {ActionType} from "../action";
import {getOffersByCity} from "./selectors";
import {NameSpace} from "../root-reducer";

const initialState = {
  hotels: [],
  offers: [],
  mapOffers: [],
  offersCount: 0,
  isDataLoaded: false,
  activeOfferId: -1,
  offersOrder: OffersOrder.POPULAR,
  openedOffer: null,
  nearbyOffers: [],
  isFavoritesDataLoaded: false,
  favoriteOffers: [],
};


const hotel = (state = initialState, action) => {
  switch (action.type) {
    // case ActionType.SET_CITY:
    //   return {
    //     ...state,
    //     city: action.payload ? action.payload : state.cities[0],
    //   };
    case ActionType.FILTER_CITY_OFFERS:
      const offers = getOffersByCity(action.payload, state.hotels);
      return {
        ...state,
        offers,
        mapOffers: offers,
        offersCount: offers.length,
      };
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        isDataLoaded: true
      };
    // case ActionType.LOAD_CITIES:
    //   return {
    //     ...state,
    //     cities: action.payload,
    //   };
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
        openedOffer: action.payload,
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
      const hotels = state.hotels.map((h)=>(h.id === action.payload.id ? action.payload : h));
      return {
        ...state,
        favoriteOffers: action.payload.isFavorite
          ? [...state.favoriteOffers, action.payload]
          : state.favoriteOffers.filter((offer)=>(offer.id !== action.payload.id)),
        openedOffer: (state.openedOffer && state.openedOffer.id === action.payload.id) ? action.payload : null,
        hotels,
        offers: getOffersByCity(hotels, state.city),
      };
  }
  return state;
};

export {hotel};
