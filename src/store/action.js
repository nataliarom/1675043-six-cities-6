import {CITIES} from "../const";


export const ActionType = {
  SET_CITY: `city/set`,
  UPDATE_OFFERS_LIST: `offer/updateList`,
  UPDATE_OFFERS_COUNT: `offer/updateCount`,
};

export const ActionCreator = {
  setCity: (city, index) => ({
    type: ActionType.SET_CITY,
    payload: CITIES[index],
  }),
  updateOffersList: (city, index) => ({
    type: ActionType.UPDATE_OFFERS_LIST,
    payload: CITIES[index],
  })
};
