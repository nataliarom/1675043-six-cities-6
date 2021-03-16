import {ActionCreator} from "./action";
import {APIRoute} from "../const";
import {renameKeys} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(ActionCreator.loadHotels(data.map((h) => (renameKeys(h)))));
      dispatch(ActionCreator.loadCityOffers(_getState().city));
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
