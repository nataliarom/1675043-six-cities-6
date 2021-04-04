import {APIRoute, AppRoute} from "../../const";

import {createAuthInfoFromApi, createErrorFromResponse} from "../../utils";
import {authorize, redirectToRoute, setApplicationError, setLoginError, unauthorize} from "./action";

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((data) => {
      return dispatch(authorize(createAuthInfoFromApi(data.data)));
    })
    .catch(() => {
      dispatch(unauthorize());
    })
);

export const login = ({login: email, password: password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((data) => dispatch(authorize(createAuthInfoFromApi(data.data))))
    .catch((data) => {
      let error = createErrorFromResponse(data.response);
      if (error.isTimeout) {
        dispatch(setApplicationError(error));
        return;
      }
      dispatch(setLoginError(error));
    })
);
export const processUnauthorisedError = () => (dispatch, _getState) => {
  dispatch(unauthorize());
  dispatch(redirectToRoute(AppRoute.LOGIN));
};
