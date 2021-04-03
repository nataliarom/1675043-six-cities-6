import {APIRoute} from "../../const";

import {createAuthInfoFromApi} from "../../utils";
import {authorize, unauthorize} from "./action";

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
    .catch(() => {
    })
);
