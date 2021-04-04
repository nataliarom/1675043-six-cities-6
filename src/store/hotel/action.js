
export const HotelActionType = {
  SET_CITY: `city/set`,
  LOAD_HOTELS: `hotel/load`,
  SET_ACTIVE_OFFER: `offer/setActive`,
  SET_OFFERS_ORDER: `offer/setOrder`,
  LOAD_HOTEL_BY_ID: `hotel/loadById`,
  LOAD_NEARBY_HOTELS: `hotel/loadNearby`,
  LOAD_FAVORITE_HOTELS: `hotel/loadFavorite`,
  UPDATE_FAVORITE_STATUS: `hotel/updateFavoriteStatus`,
  SET_OFFER_ERROR: `offer/setError`,
};

export const setCity = (city) => ({
  type: HotelActionType.SET_CITY,
  payload: city,
});

export const loadHotels = (hotels) => ({
  type: HotelActionType.LOAD_HOTELS,
  payload: hotels,
});

export const setActiveOffer = (offerId) => ({
  type: HotelActionType.SET_ACTIVE_OFFER,
  payload: offerId,
});

export const setOffersOrder = (sortingOrder) => ({
  type: HotelActionType.SET_OFFERS_ORDER,
  payload: sortingOrder,
});

export const loadHotelData = (hotel) => ({
  type: HotelActionType.LOAD_HOTEL_BY_ID,
  payload: hotel,
});

export const loadNearbyHotels = (hotels) => ({
  type: HotelActionType.LOAD_NEARBY_HOTELS,
  payload: hotels,
});

export const loadFavoriteHotels = (hotels) =>({
  type: HotelActionType.LOAD_FAVORITE_HOTELS,
  payload: hotels,
});

export const updateFavoriteStatus = (hotel) =>({
  type: HotelActionType.UPDATE_FAVORITE_STATUS,
  payload: hotel,
});

export const setOfferError = (error) => ({
  type: HotelActionType.SET_OFFER_ERROR,
  payload: error,
});
