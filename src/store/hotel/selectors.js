
import {createSelector} from "reselect";

const getHotels = (state) => state.hotels;

const getCity = (state) => state.city;

const getNearbyOffers = (state) => state.nearbyOffers;
const getOpenedOffer = (state) => state.openedOffer;


const getCitiesFromHotelsList = (hotels) => {
  let cities = [];
  hotels.forEach((offer)=> {
    if (cities.findIndex((city) => city.name === offer.city.name) < 0) {
      cities.push(offer.city);
    }
  });
  return cities;
};

const getOffersByCity = (city, hotels) => {
  return hotels.filter((hotel) => {
    return hotel.city.name === city.name;
  });
};

export const getOffersFilteredByCity = createSelector(getCity, getHotels, getOffersByCity);
export const getCities = createSelector(getHotels, getCitiesFromHotelsList);

export const getNearbyOffersWithCurrentOffer = createSelector(getNearbyOffers, getOpenedOffer,
    (nearbyOffers, openedOffer)=> [...nearbyOffers, openedOffer]);

export const getPhotosForOffer = createSelector(getOpenedOffer,
    (openedOffer) => openedOffer.images.slice(0, 6));
