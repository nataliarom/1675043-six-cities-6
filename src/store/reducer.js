
import {ActionType} from './action';
import {DEFAULT_CITY, CITIES_LIST} from "../const";
import {getOffersFilteredByCity} from "../offers-processing";
import {HOTEL_OFFERS} from "../mocks/offers";

const initialState = {
  city: DEFAULT_CITY,
  offers: getOffersFilteredByCity(HOTEL_OFFERS, DEFAULT_CITY),
  offersCount: getOffersFilteredByCity(HOTEL_OFFERS, DEFAULT_CITY).length,
  cities: CITIES_LIST
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.UPDATE_OFFERS_LIST:
      const offers = getOffersFilteredByCity(HOTEL_OFFERS, action.payload);
      return {
        ...state,
        offers,
        offersCount: offers.length
      };
  }

  return state;
};

export {reducer};
