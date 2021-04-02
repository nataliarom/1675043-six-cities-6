import {NameSpace} from "../root-reducer";
import {createSelector} from "reselect";

export const getHotels = (state) => state[NameSpace.HOTEL].hotels;

export const getCity = (state) => state[NameSpace.HOTEL].city;

export const getOffersByCity = (city, hotels) => {
  return hotels.filter((hotel) => {
    return hotel.city.name === city.name;
  });
};

export const getOffersFilteredByCity = createSelector(getCity, getHotels, getOffersByCity);
