import {ActionCreator} from "./action";
import {APIRoute} from "../const";
import {renameKeys, getCitiesFromOffersList} from "../utils";
import {NameSpace} from "./root-reducer";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(ActionCreator.loadCities(getCitiesFromOffersList(data)));
      const city = _getState()[NameSpace.HOTEL].cities[0];
      dispatch(ActionCreator.setCity(city));
      dispatch(ActionCreator.loadHotels(data.map((hotel) => (renameKeys(hotel)))));
      dispatch(ActionCreator.filterHotelsByCity(city));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((data) => {
      return dispatch(ActionCreator.authorize(data.data));
    })
    .catch(() => {
      dispatch(ActionCreator.unauthorize());
    })
);

export const login = ({login: email, password: password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((data) => dispatch(ActionCreator.authorize(renameKeys(data.data))))
    .catch(() => {
    })
);

export const fetchOfferById = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}${offerId}`)
    .then(({data}) => {
      if (!_getState()[NameSpace.HOTEL].city) {
        dispatch(ActionCreator.setCity(data.city));
      }
      dispatch(ActionCreator.loadHotelData(renameKeys(data)));
    }).catch((error) => {
      dispatch(ActionCreator.setOfferError(error));
    })
);
export const fetchReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${offerId}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data.map((comment) => (renameKeys(comment)))));
    }).catch(() => {})
);

export const addComment = ({comment: comment, rating: rating, offerId: offerId}) => (dispatch, _getState, api) => (
  api.post((`${APIRoute.COMMENTS}${offerId}`), {comment, rating})
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data.map((newComment) => (renameKeys(newComment)))));
      dispatch(ActionCreator.setReviewSuccess());
    }).catch((data) => {
      dispatch(ActionCreator.setReviewError(data.response.data.error));
    })
);
export const fetchNearbyOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS_NEARBY.replace(`:id`, offerId)}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadNearbyHotels(data.map((hotel) => (renameKeys(hotel)))));
    }).catch(() => {})
);

export const fetchFavoriteHotels = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FAVORITE_HOTELS}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFavoriteHotels(data.map((hotel) => (renameKeys(hotel)))));
    }).catch(() => {})
);
export const addToFavorites = ({offerId, status}) => (dispatch, _getState, api) => (
  api.post((`${APIRoute.FAVORITE_HOTELS}${offerId}/${status}`), {offerId, status})
    .then(({data}) => {
      dispatch(ActionCreator.updateFavoriteStatus(renameKeys(data)));
    }).catch(() => {
      dispatch(checkAuth());
    })
);
