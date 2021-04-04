import {AuthorizationStatus} from "../../const";
import {UserActionType} from "./action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
  loginError: null,
  appError: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionType.UNAUTHORIZE:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: null
      };
    case UserActionType.AUTHORIZE:
      return {
        ...state,
        authInfo: action.payload,
        loginError: null,
        authorizationStatus: AuthorizationStatus.AUTH
      };
    case UserActionType.SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      };
    case UserActionType.SET_APPLICATION_ERROR:
      return {
        ...state,
        appError: action.payload
      };
  }

  return state;
};

export default userReducer;
