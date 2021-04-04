import {APIRoute, DEFAULT_CITY_INDEX} from "../../const";
import {createErrorFromResponse, createHotelFromApi} from "../../utils";
import {NameSpace} from "../root-reducer";
import {
  loadFavoriteHotels,
  loadHotelData,
  loadHotels,
  loadNearbyHotels,
  setCity,
  setOfferError,
  updateFavoriteStatus
} from "./action";
import {processUnauthorisedError} from "../user/api-action";
import {setApplicationError} from "../user/action";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(setCity(data[DEFAULT_CITY_INDEX].city));
      dispatch(loadHotels(data.map((hotel) => (createHotelFromApi(hotel)))));
    }).catch((data) => {
      const error = createErrorFromResponse(data.response);
      if (error.isTimeout) {
        dispatch(setApplicationError(error));
      }
    })
);

export const fetchOfferById = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}${offerId}`)
    .then(({data}) => {
      if (!_getState()[NameSpace.HOTEL].city) {
        dispatch(setCity(data.city));
      }
      dispatch(loadHotelData(createHotelFromApi(data)));
    }).catch((data) => {
      const error = createErrorFromResponse(data.response);
      if (error.isTimeout) {
        dispatch(setApplicationError(error));
        return;
      }
      dispatch(setOfferError(error));
    })
);

export const fetchNearbyOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS_NEARBY.replace(`:id`, offerId)}`)
    .then(({data}) => {
      dispatch(loadNearbyHotels(data.map((hotel) => (createHotelFromApi(hotel)))));
    }).catch((data) => {
      const error = createErrorFromResponse(data.response);
      if (error.isTimeout) {
        dispatch(setApplicationError(error));
      }
    })
);

export const fetchFavoriteHotels = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FAVORITE_HOTELS}`)
    .then(({data}) => {
      dispatch(loadFavoriteHotels(data.map((hotel) => (createHotelFromApi(hotel)))));
    }).catch((data) => {
      const error = createErrorFromResponse(data.response);
      if (error.isTimeout) {
        dispatch(setApplicationError(error));
        return;
      }
      if (error.isUnauthorized) {
        dispatch(processUnauthorisedError());
      }
    })
);
export const addToFavorites = ({offerId, status}) => (dispatch, _getState, api) => (
  api.post((`${APIRoute.FAVORITE_HOTELS}${offerId}/${status}`), {offerId, status})
    .then(({data}) => {
      dispatch(updateFavoriteStatus(createHotelFromApi(data)));
    }).catch((data) => {
      const error = createErrorFromResponse(data.response);
      if (error.isTimeout) {
        dispatch(setApplicationError(error));
        return;
      }
      if (error.isUnauthorized) {
        dispatch(processUnauthorisedError());
      }
    })
);
