import {ActionCreator} from "./action";
import {APIRoute} from "../const";
import {renameKeys, getCitiesFromOffersList} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(ActionCreator.loadCities(getCitiesFromOffersList(data)));
      dispatch(ActionCreator.loadHotels(data.map((hotel) => (renameKeys(hotel)))));
      dispatch(ActionCreator.setCity(_getState().cities[0]));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((data) => {
      return dispatch(ActionCreator.authorize(data.data));
    })
    .catch(() => {})
);

export const login = ({login: email, password: password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((data) => dispatch(ActionCreator.authorize(renameKeys(data.data))))
);

export const fetchOfferById = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}${offerId}`)
    .then(({data}) => {
      if (!_getState().city) {
        dispatch(ActionCreator.setCity(data.city));
      }
      dispatch(ActionCreator.loadHotelData(renameKeys(data)));
    }).catch(() => {})
);
export const fetchReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${offerId}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data.map((comment) => (renameKeys(comment)))));
    })
);

export const addComment = ({comment: comment, rating: rating, offerId: offerId}) => (dispatch, _getState, api) => (
  api.post((`${APIRoute.COMMENTS}${offerId}`), {comment, rating})
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data.map((newComment) => (renameKeys(newComment)))));
    })
);
export const fetchNearbyOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS_NEARBY.replace(`:id`, offerId)}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadNearbyHotels(data.map((hotel) => (renameKeys(hotel)))));
    })
);
