import {OffersOrder} from "../../const";
import {ActionType} from "../action";


const initialState = {
  hotels: [],
  isDataLoaded: false,
  activeOfferId: -1,
  offersOrder: OffersOrder.POPULAR,
  openedOffer: null,
  nearbyOffers: [],
  isFavoritesDataLoaded: false,
  favoriteOffers: [],
  loadOfferError: null,
  city: null,
};


const hotel = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        isDataLoaded: true
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
        openedOffer: action.payload,
        loadOfferError: null
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
      return {
        ...state,
        favoriteOffers: action.payload.isFavorite
          ? [...state.favoriteOffers, action.payload]
          : state.favoriteOffers.filter((offer)=>(offer.id !== action.payload.id)),
        openedOffer: (state.openedOffer && state.openedOffer.id === action.payload.id) ? action.payload : null,
        hotels: state.hotels.map((h)=>(h.id === action.payload.id ? action.payload : h)),
      };
    case ActionType.SET_OFFER_404_ERROR:
      return {
        ...state,
        loadOfferError: action.payload,
        openedOffer: null
      };
  }
  return state;
};

export {hotel};
