import {NameSpace} from "../root-reducer";
import {createSelector} from "reselect";

export const getHotels = (state) => state[NameSpace.HOTEL].hotels;
export const getCity = (state) => state[NameSpace.HOTEL].city;
export const getOffersByCity = (hotels, city) => hotels.filter((hotel) => hotel.city.name === city.name);
export const getOffersFilteredByCity = createSelector(
    [getHotels],
    getOffersByCity
);

