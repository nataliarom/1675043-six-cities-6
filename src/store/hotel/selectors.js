
import {createSelector} from "reselect";
import {getCitiesFromHotelsList, getOffersByCity} from "../../utils";
import {MAX_PHOTO_LIST_SIZE} from "../../const";

const getHotels = (state) => state.hotels;

const getCity = (state) => state.city;

const getNearbyOffers = (state) => state.nearbyOffers;
const getOpenedOffer = (state) => state.openedOffer;

export const getOffersFilteredByCity = createSelector(getCity, getHotels, getOffersByCity);
export const getCities = createSelector(getHotels, getCitiesFromHotelsList);

export const getNearbyOffersWithCurrentOffer = createSelector(getNearbyOffers, getOpenedOffer,
    (nearbyOffers, openedOffer)=> [...nearbyOffers, openedOffer]);

export const getPhotosForOffer = createSelector(getOpenedOffer,
    (openedOffer) => openedOffer.images.slice(0, MAX_PHOTO_LIST_SIZE));
